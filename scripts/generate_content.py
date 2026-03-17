#!/usr/bin/env python3

import argparse
import json
import re
from pathlib import Path
from typing import Optional


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8").replace("\r\n", "\n")


def bullets(block: str) -> list[str]:
    return [line[2:].strip() for line in block.splitlines() if line.startswith("- ")]


def normalize_inline(text: str) -> str:
    return re.sub(r"\s+", " ", text.replace("**", "").strip())


def split_h3_sections(block: str) -> list[tuple[str, str]]:
    matches = list(re.finditer(r"^### (.+)$", block, re.M))
    sections: list[tuple[str, str]] = []
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(block)
        sections.append((match.group(1).strip(), block[start:end].strip()))
    return sections


def parse_top_sections(block: str) -> dict[str, str]:
    matches = list(re.finditer(r"^## (.+)$", block, re.M))
    sections: dict[str, str] = {}
    for index, match in enumerate(matches):
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(block)
        sections[match.group(1).strip()] = block[start:end].strip()
    return sections


def value_for(block: str, label: str) -> str:
    match = re.search(rf"^\*\*{re.escape(label)}:\*\*\s*(.+)$", block, re.M)
    return normalize_inline(match.group(1)) if match else ""


def category_theme(category: str) -> tuple[str, str]:
    upper = category.upper()
    if "DEFENSE" in upper or "RECOVERY" in upper:
        return "#6B4226", "defense"
    if "NET" in upper or "VOLLEY" in upper or "OVERHEAD" in upper:
        return "#0D3B66", "net"
    if "RETURN" in upper or "SERVICE" in upper:
        return "#4A1C6A", "return"
    if "RUIMTE" in upper or "UITSPELEN" in upper:
        return "#4A1C6A", "ruimte"
    return "#0D5517", "transitie"


def infer_type(title: str, category: str, context: str) -> tuple[str, str]:
    haystack = f"{title} {category} {context}".lower()
    if "return" in haystack or "serve" in haystack or "service" in haystack:
        return "return", "Return & opening"
    if any(token in haystack for token in ["bandeja", "volley", "net hold", "freeze volley", "smash"]):
        return "net", "Netdominantie"
    if any(token in haystack for token in ["double glass", "backglass", "corner defense", "body defense", "retrieval", "defense"]):
        return "defense", "Defense & recovery"
    if any(token in haystack for token in ["open space", "angle", "middle squeeze"]):
        return "ruimte", "Ruimte creëren"
    if any(token in haystack for token in ["decision", "window"]):
        return "decision", "Beslissen onder druk"
    return "transitie", "Transitie naar net"


def infer_level(title: str, category: str, sequence: str) -> tuple[str, str, str]:
    haystack = f"{title} {category}".lower()
    if any(token in haystack for token in ["double glass", "counterbandeja", "smash", "airborne", "serve + ball 3", "freeze volley"]):
        return "advanced", "Advanced", "1-5"
    if "4-ball" in sequence.lower() or any(token in haystack for token in ["bandeja", "return", "middle squeeze", "rebuild"]):
        return "average", "Gemiddeld", "6-7"
    return "beginner", "Beginner", "8-9"


def player_variants(title: str, category: str, type_value: str) -> dict[str, list[str]]:
    short = title.split("→")[0].strip()
    if type_value == "net":
        return {
            "left": [
                f"Voor linkshandig rechts ligt de nadruk op forehand-overheads, bodydruk en het afsluiten van middenballen vanuit {short.lower()}.",
                "Het herstel na overhead of eerste volley blijft iets meer gericht op het bewaken van het midden en de forehandzijde.",
                "Laat de speler na drukballen sneller herkennen wanneer de volgende bal naar voeten/body gaat in plaats van naar de kleine hoek."
            ],
            "right": [
                f"Voor rechtshandig links verschuift {short.lower()} meer naar backhand-ordening, lijnbewaking en compacter voetenwerk in de volleyzone.",
                "De nadruk ligt iets vaker op het sluiten van de lijn en daarna pas op het meenemen van middenruimte.",
                "Werk met dezelfde sequentie, maar laat de speler andere contactpunten en herstelhoeken voelen."
            ]
        }
    if type_value == "return":
        return {
            "left": [
                f"Voor linkshandig rechts draait {short.lower()} vaker om een forehand-georiënteerde vervolgkeuze na return of service-plus-één.",
                "De speler bewaakt het midden actiever en kiest eerder voor body of midden dan voor de smalle lijn.",
                "Doorstappen gebeurt alleen wanneer de return of eerste bal ook echt ruimte wint."
            ],
            "right": [
                f"Voor rechtshandig links verschuift {short.lower()} meer naar backhandcontrole, cross-openingen en later instappen op de volgende bal.",
                "Laat de speler de return iets meer koppelen aan lijnsluiting en partnerlogica.",
                "Werk met dezelfde oefenopbouw, maar andere besluitmomenten rond midden en lijn."
            ]
        }
    if type_value == "defense":
        return {
            "left": [
                f"Voor linkshandig rechts krijgt {short.lower()} meer nadruk op forehand-reddingen, uit de hoek draaien en via cross of midden tijd kopen.",
                "De herstelpas richt zich vaker op het opnieuw vrijmaken van de forehandhelft en het terugclaimen van middenruimte.",
                "Laat de speler herkennen wanneer een hoge reset slimmer is dan een vlakke uitweg."
            ],
            "right": [
                f"Voor rechtshandig links ligt {short.lower()} meer op backhand-organisatie, compacter glasgebruik en rust houden richting lijnzijde.",
                "De speler moet sneller kiezen tussen blokkeren, hoog resetten of via midden neutraliseren.",
                "Herstel blijft leidend: eerst uit de druk, daarna pas denken aan omschakelen."
            ]
        }
    if type_value == "ruimte":
        return {
            "left": [
                f"Voor linkshandig rechts mag {short.lower()} vaker gekoppeld worden aan het openen van ruimte via body of het vrijmaken van de forehandhoek.",
                "De speler leest eerder of de volgende bal door midden of richting lijn gespeeld moet worden.",
                "Middenlogica blijft belangrijker dan een vroege winnerpoging."
            ],
            "right": [
                f"Voor rechtshandig links verschuift {short.lower()} meer naar het openmaken van de backhandhoek en het benutten van cross-ruimte.",
                "De speler werkt iets vaker met lijnbewaking vóór hij de open ruimte aanvalt.",
                "Laat het verschil vooral zitten in richtingkeuze en niet alleen in spiegeling."
            ]
        }
    return {
        "left": [
            f"Voor linkshandig rechts gebruik je {short.lower()} met meer nadruk op forehand-dominantie, middenbewaking en instappen vanuit de rechterkant.",
            "De speler leest iets eerder wanneer de volgende bal naar body, midden of voeten moet om het punt tactisch te kantelen.",
            f"Behoud binnen {category.lower()} dezelfde structuur, maar niet dezelfde automatische richtingen als bij rechtshandig links."
        ],
        "right": [
            f"Voor rechtshandig links verschuift {short.lower()} naar meer backhand-ordening, lijnbewaking en andere middenkeuzes dan bij een linkshandige rechterkantspeler.",
            "De speler houdt dezelfde rallylogica, maar de beste richting en het beste herstelvenster zijn niet identiek.",
            "Gebruik de oefening dus niet alleen gespiegeld, maar ook met andere tactische cues rond ruimte en partnerlogica."
        ]
    }


def parse_goal(block: str) -> list[dict]:
    main_goal = value_for(block, "Hoofddoel")
    tactical = []
    match = re.search(r"### Tactische doelen\s*(.*)", block, re.S)
    if match:
        items = re.findall(r"\d+\.\s+\*\*(.+?)\*\*\s+Trigger:\s*(.+?)\s+Actie:\s*(.+?)\s+Waarom:\s*(.+?)(?=(?:\n\d+\.|\Z))", match.group(1), re.S)
        if items:
            tactical = [
                f"{normalize_inline(title)}: trigger {normalize_inline(trigger)} Actie: {normalize_inline(action)} Waarom: {normalize_inline(why)}"
                for title, trigger, action, why in items
            ]
        else:
            tactical = [
                normalize_inline(re.sub(r"^\d+\.\s*", "", line))
                for line in match.group(1).splitlines()
                if line.strip() and re.match(r"^\d+\.", line.strip())
            ]
    output = []
    if main_goal:
        output.append({"title": "Hoofddoel", "text": main_goal})
    if tactical:
        output.append({"type": "list", "title": "Tactische doelen", "items": tactical})
    return output


def parse_setup_machine(block: str) -> tuple[list[dict], list[str]]:
    setup_items: list[dict] = []
    machine_items: list[str] = []
    for title, content in split_h3_sections(block):
        title_clean = normalize_inline(title)
        if "Startpositie" in title_clean:
            for line in bullets(content):
                label = "Positie" if "start" in line.lower() else "Setup"
                setup_items.append({"title": label, "text": normalize_inline(line)})
        elif "Machine-instellingen" in title_clean:
            machine_items.extend([normalize_inline(line) for line in bullets(content)])
    return setup_items, machine_items


def parse_targets(block: str) -> list[dict]:
    result = []
    for item in bullets(block):
        if ":" in item:
            name, text = item.split(":", 1)
            result.append({"name": normalize_inline(name), "text": normalize_inline(text)})
    return result


def parse_steps(block: str) -> list[dict]:
    result = []
    for title, content in split_h3_sections(block):
        action = value_for(content, "Jouw actie")
        why = value_for(content, "Waarom")
        target = value_for(content, "Doelzone")
        body = " ".join(
            part for part in [
                action,
                f"Waarom: {why}" if why else "",
                f"Doelzone: {target}" if target else ""
            ] if part
        )
        result.append({"title": normalize_inline(title), "text": body})
    return result


def parse_observation(block: str) -> list[dict]:
    output = []
    for title, content in split_h3_sections(block):
        output.append({"title": normalize_inline(title), "bullets": [normalize_inline(item) for item in bullets(content)]})
    return output


def parse_machine_exercise(number: str, title: str, block: str) -> dict:
    sections = parse_top_sections(block)
    category = value_for(block, "Categorie")
    context = value_for(block, "Spelsituatie")
    match_context = value_for(block, "In wedstrijden zie je dit")
    setvolume = value_for(block, "Setvolume")
    volume_match = re.search(r"^(.*?)\s*×\s*(\d+)\s*herhalingen\s*\((.+)\)$", setvolume)
    sequence = normalize_inline(volume_match.group(1)) if volume_match else setvolume
    repeats = f"{volume_match.group(2)} herhalingen" if volume_match else "20 herhalingen"
    total_balls = normalize_inline(volume_match.group(3)) if volume_match else "60 ballen totaal"
    goal = parse_goal(sections.get("🎯 Doel", ""))
    setup, machine = parse_setup_machine(sections.get("🧰 Setup", ""))
    category_color, fallback_type = category_theme(category)
    type_value, type_label = infer_type(title, category, context)
    if fallback_type == "transitie" and type_value == "transitie":
        type_label = "Transitie naar net"
    level, level_label, knltb = infer_level(title, category, sequence)
    coach_view = parse_observation(sections.get("👀 Observatie", ""))
    coach_view.append({
        "title": "Beslisregel",
        "bullets": [normalize_inline(item) for item in bullets(sections.get("🧠 Algemene beslisboom", ""))]
    })
    coach_view.append({
        "title": "Coach Tips",
        "bullets": [normalize_inline(item) for item in bullets(sections.get("💡 Coach Tips & Tactische Inzichten", ""))]
    })
    return {
        "id": number.zfill(2),
        "category": category,
        "title": title.replace("→", "→"),
        "shortTitle": title.split("→")[0].strip(),
        "summary": normalize_inline(value_for(sections.get("🎯 Doel", ""), "Hoofddoel") or context),
        "context": context,
        "matchContext": match_context,
        "level": level,
        "levelLabel": level_label,
        "knltb": knltb,
        "type": type_value,
        "typeLabel": type_label,
        "sequence": sequence,
        "repeats": repeats,
        "totalBalls": total_balls or "60 ballen",
        "categoryColor": category_color,
        "playerVariant": player_variants(title, category, type_value),
        "goal": goal,
        "setup": setup,
        "targets": parse_targets(sections.get("🥅 Targets", "")),
        "steps": parse_steps(sections.get("🏃 Uitvoering", "")),
        "score": [normalize_inline(item) for item in bullets(sections.get("✅ Score", ""))],
        "coaching": [normalize_inline(item) for item in bullets(sections.get("💡 Coach Tips & Tactische Inzichten", ""))],
        "machine": machine,
        "coachView": coach_view
    }


def parse_training_library(block: str, kind: str) -> dict:
    sections = parse_top_sections(block)
    score = [normalize_inline(item) for item in bullets(sections.get("✅ Score", ""))]
    return {
        "title": normalize_inline(re.search(r"^# .+?—\s+(.+)$", block, re.M).group(1)),
        "category": value_for(block, "Categorie"),
        "situation": value_for(block, "Spelsituatie"),
        "context": value_for(block, "In trainingen zie je dit vaak") or value_for(block, "In wedstrijden zie je dit vaak"),
        "format": value_for(block, "Werkvorm") or ("3 spelers" if kind == "one-vs-two" else "Coach-feed"),
        "goal": normalize_inline(value_for(sections.get("🎯 Doel", ""), "Hoofddoel")),
        "targets": [normalize_inline(item) for item in bullets(sections.get("🥅 Targets", ""))],
        "phases": [{"title": normalize_inline(title), "text": normalize_inline(" ".join(bullets(content)))} for title, content in split_h3_sections(sections.get("🏃 Uitvoering", ""))],
        "decision": [normalize_inline(item) for item in bullets(sections.get("🧠 Beslisregel", ""))],
        "coachTips": [normalize_inline(item) for item in bullets(sections.get("💡 Coach Tips & Tactische Inzichten", ""))],
        "score": score[:4] if score else [],
        "tags": re.findall(r"#\w[\w-]*", block)
    }


def parse_strategy(text: str) -> dict:
    def section_between(start: str, end: Optional[str]) -> str:
        end_pattern = rf"(?=^{re.escape(end)}\n)" if end else r"\Z"
        pattern = rf"^{re.escape(start)}\n(.*?){end_pattern}"
        match = re.search(pattern, text, re.M | re.S)
        return match.group(1).strip() if match else ""

    strategy_home = section_between("# STRATEGIE HOME — Zo lees je het spel", "# 1. AANVALLEN")
    attacks = section_between("# 1. AANVALLEN", "# 2. VERDEDIGEN")
    defense = section_between("# 2. VERDEDIGEN", "# 3. TRANSITIE")
    transition = section_between("# 3. TRANSITIE", "# 4. PER SLAG BESLISSEN")
    strokes = section_between("# 4. PER SLAG BESLISSEN", "# 5. SPELEN ALS DUO")
    duo = section_between("# 5. SPELEN ALS DUO", "# 6. WEDSTRIJDSITUATIES")
    matchplay = section_between("# 6. WEDSTRIJDSITUATIES", "# 7. OVERKOEPELENDE STRATEGIETHEMA’S")

    stroke_sections = split_h3_sections(strokes.replace("## ", "### "))
    stroke_cards = []
    for title, content in stroke_sections:
        when = re.search(r"\*\*Wanneer:\*\*\s*(.+)", content)
        goal = re.search(r"\*\*Doel:\*\*\s*(.+)", content)
        avoid = re.search(r"\*\*Niet doen:\*\*\s*(.+)", content)
        rule = re.search(r"\*\*Beslisregel:\*\*\s*(.+)", content)
        if when and goal and avoid and rule:
            stroke_cards.append({
                "name": normalize_inline(title),
                "when": normalize_inline(when.group(1)),
                "goal": normalize_inline(goal.group(1)),
                "avoid": normalize_inline(avoid.group(1)),
                "rule": normalize_inline(rule.group(1))
            })

    match_sections = split_h3_sections(matchplay.replace("## ", "### "))
    match_cards = []
    for title, content in match_sections:
        lines = [line.strip() for line in content.splitlines() if line.strip()]
        summary = ""
        rules = bullets(content)
        for line in lines:
            if not line.startswith("###") and not line.startswith("-"):
                summary = normalize_inline(line)
                break
        match_cards.append({
            "title": normalize_inline(title),
            "summary": summary,
            "rules": [normalize_inline(rule) for rule in rules]
        })

    why_block = re.search(r"## Waarom deze opbouw\?\n(.+?)(?=\n\nDeze module helpt)", strategy_home, re.S)

    return {
        "intro": {
            "why": normalize_inline(why_block.group(1) if why_block else strategy_home.split("\n\n", 1)[0]),
            "questions": bullets(re.search(r"Deze module helpt spelers.*?:\n(.+?)(?=\n## )", strategy_home, re.S).group(1)),
            "phases": [normalize_inline(re.sub(r"^\d+\.\s*", "", item)) for item in re.findall(r"^\d+\.\s+(.+)$", strategy_home, re.M)],
            "language": bullets(re.search(r"## Basistaal voor de hele site\n(.+)", strategy_home, re.S).group(1).split("\n---", 1)[0])
        },
        "pillars": [
            {
                "title": "Aanvallen",
                "summary": normalize_inline(re.search(r"## Wat is aanvallen in padel\?\n(.+?)(?=\n## )", attacks, re.S).group(1)),
                "focus": bullets(re.search(r"## Belangrijkste beslisregels bij aanvallen\n(.+?)(?=\n## )", attacks, re.S).group(1)),
                "avoid": bullets(re.search(r"## Wat je níet wilt\n(.+?)(?=\n## )", attacks, re.S).group(1)),
                "cues": bullets(re.search(r"## Coachtaal / cues\n(.+?)(?=\n## )", attacks, re.S).group(1))
            },
            {
                "title": "Verdedigen",
                "summary": normalize_inline(re.search(r"## Wat is verdedigen in padel\?\n(.+?)(?=\n## )", defense, re.S).group(1)),
                "focus": bullets(re.search(r"## Beslisregels bij verdedigen\n(.+?)(?=\n## )", defense, re.S).group(1)),
                "avoid": bullets(re.search(r"## Veelgemaakte fouten in verdediging\n(.+?)(?=\n---)", defense, re.S).group(1)),
                "cues": bullets(re.search(r"## Verdedigen vanuit de hoek\n.*?## Coachtaal\n(.+?)(?=\n## )", defense, re.S).group(1))
            },
            {
                "title": "Transitie",
                "summary": normalize_inline(re.search(r"## Wat is transitie\?\n(.+?)(?=\n## )", transition, re.S).group(1)),
                "focus": bullets(re.search(r"## Beslisregels bij transitie\n(.+?)(?=\n## )", transition, re.S).group(1)),
                "avoid": bullets(re.search(r"### Wat spelers vaak fout doen\n(.+?)(?=\n## )", transition, re.S).group(1)),
                "cues": bullets(re.search(r"## Coachtaal / cues\n(.+?)(?=\n---)", transition, re.S).group(1))
            }
        ],
        "strokes": stroke_cards,
        "duo": {
            "summary": normalize_inline(re.search(r"## Waarom dit een hoofdmodule moet zijn\n(.+?)(?=\n## )", duo, re.S).group(1)),
            "principles": bullets(re.search(r"## Basisprincipes van duo-spel\n(.+?)(?=\n## )", duo, re.S).group(1)),
            "rightSide": bullets(re.search(r"### Rechterkant\n(.+?)(?=\n### )", duo, re.S).group(1)),
            "leftSide": bullets(re.search(r"### Linkerkant\n(.+?)(?=\n## )", duo, re.S).group(1)),
            "communication": bullets(re.search(r"## Communicatie\n(.+?)(?=\n## )", duo, re.S).group(1)),
            "cues": bullets(re.search(r"## Coachtaal / cues\n(.+?)(?=\n---)", duo, re.S).group(1))
        },
        "matchplay": match_cards
    }


def write_js(path: Path, variable: str, payload: object) -> None:
    path.write_text(f"window.{variable} = {json.dumps(payload, ensure_ascii=False, indent=2)};\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    args = parser.parse_args()

    text = read_text(args.source)

    machine_blocks = list(
        re.finditer(
            r"^# OEFENING\s+(\d+)\s+—\s+(.+?)$(.*?)(?=^# OEFENING\s+\d+\s+—|\n## DEEL B)",
            text,
            re.M | re.S
        )
    )
    extra_exercises = [parse_machine_exercise(match.group(1), match.group(2).strip(), match.group(0)) for match in machine_blocks]

    one_on_one = [
        parse_training_library(match.group(0), "one-on-one")
        for match in re.finditer(
            r"^# 1-OP-1 OEFENING\s+(\d+)\s+—\s+(.+?)$(.*?)(?=^# 1-OP-1 OEFENING\s+\d+\s+—|\n## DEEL C)",
            text,
            re.M | re.S
        )
    ]

    one_vs_two = [
        parse_training_library(match.group(0), "one-vs-two")
        for match in re.finditer(
            r"^# 1-vs-2 SPELVORM\s+(\d+)\s+—\s+(.+?)$(.*?)(?=^# 1-vs-2 SPELVORM\s+\d+\s+—|\n## DEEL D)",
            text,
            re.M | re.S | re.I
        )
    ]

    module_content = {
        "oneOnOne": one_on_one,
        "oneVsTwo": one_vs_two,
        "strategy": parse_strategy(text)
    }

    DATA_DIR.mkdir(exist_ok=True)
    write_js(DATA_DIR / "exercise-blueprints-extra.js", "EXTRA_EXERCISE_BLUEPRINTS", extra_exercises)
    write_js(DATA_DIR / "module-content.js", "PADEL_MODULE_CONTENT", module_content)


if __name__ == "__main__":
    main()
