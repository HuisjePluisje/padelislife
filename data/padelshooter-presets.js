(function buildPadelShooterPresets() {
  const disclaimer =
    "Disclaimer: deze instellingen zijn praktische richtlijnen voor de PadelShooter 3A. Zie ze als startpunt en finetune op baan, ballen en spelniveau.";
  const exercises = [
    ...(Array.isArray(window.EXERCISE_BLUEPRINTS) ? window.EXERCISE_BLUEPRINTS : []),
    ...(Array.isArray(window.EXTRA_EXERCISE_BLUEPRINTS) ? window.EXTRA_EXERCISE_BLUEPRINTS : [])
  ];
  const appPrograms = window.PADELSHOOTER_APP_PROGRAMS || {};

  function mirrorDirectionalText(text) {
    const swaps = [
      ["rechterkant", "__SIDE_RIGHT__"],
      ["linkerkant", "__SIDE_LEFT__"],
      ["rechterhelft", "__HALF_RIGHT__"],
      ["linkerhelft", "__HALF_LEFT__"],
      ["rechterspeler", "__PLAYER_RIGHT__"],
      ["linkerspeler", "__PLAYER_LEFT__"],
      ["rechtsachter", "__BACK_RIGHT__"],
      ["linksachter", "__BACK_LEFT__"],
      ["rechterzijde", "__ZONE_RIGHT__"],
      ["linkerzijde", "__ZONE_LEFT__"]
    ];

    let result = text;
    swaps.forEach(([from, token]) => {
      result = result.replaceAll(from, token);
    });

    return result
      .replaceAll("__SIDE_RIGHT__", "linkerkant")
      .replaceAll("__SIDE_LEFT__", "rechterkant")
      .replaceAll("__HALF_RIGHT__", "linkerhelft")
      .replaceAll("__HALF_LEFT__", "rechterhelft")
      .replaceAll("__PLAYER_RIGHT__", "linkerspeler")
      .replaceAll("__PLAYER_LEFT__", "rechterspeler")
      .replaceAll("__BACK_RIGHT__", "linksachter")
      .replaceAll("__BACK_LEFT__", "rechtsachter")
      .replaceAll("__ZONE_RIGHT__", "linkerzijde")
      .replaceAll("__ZONE_LEFT__", "rechterzijde");
  }

  function handednessContext(routeSlug, handedness) {
    const sideText = handedness === "left" ? "Linkshandig rechts" : "Rechtshandig links";
    const halfText = handedness === "left" ? "rechterhelft" : "linkerhelft";
    const middleText = handedness === "left" ? "rechterspeler" : "linkerspeler";

    if (routeSlug === "anti-bandeja-defense" || routeSlug === "glass-defense") {
      return `${sideText}: zet de primaire feed op de ${halfText}, zodat glas, hoek en lage exits op de wedstrijdechte spelerkant terugkomen.`;
    }
    if (routeSlug === "return-first-volley") {
      return `${sideText}: laat service-simulaties en eerste vervolgballen starten op de ${halfText}, zodat return en eerste volley voor de ${middleText} logisch blijven.`;
    }
    if (routeSlug === "bandeja-control" || routeSlug === "overhead-under-pressure") {
      return `${sideText}: spiegel de volley- en lobfeed naar de ${halfText}, zodat lob read, overhead en recovery op de juiste spelerzijde vallen.`;
    }
    if (routeSlug === "net-dominance" || routeSlug === "low-ball-control") {
      return `${sideText}: laat de eerste druk- of instapbal op de ${halfText} vallen, zodat de eerste volley of lage entry op de juiste kant begint.`;
    }
    return `${sideText}: spiegel de feed naar de ${halfText} van de speler en houd de eerste beslisbal op die wedstrijdechte kant.`;
  }

  function machineLinesFor(exercise, handedness) {
    const routeSlug = exercise.primaryRoute || "";
    const baseLines = Array.isArray(exercise.machine) ? exercise.machine : [];
    const variantLines = handedness === "left" ? baseLines : baseLines.map(mirrorDirectionalText);

    return {
      handedness,
      label: handedness === "left" ? "Linkshandig rechts" : "Rechtshandig links",
      lines: [handednessContext(routeSlug, handedness), ...variantLines]
    };
  }

  function ballObjectsFrom(lines) {
    return lines
      .filter((line) => /^Bal\s+\d+:/i.test(line))
      .map((line) => {
        const match = line.match(/^Bal\s+(\d+):\s*(.*)$/i);
        return {
          ball: Number(match?.[1] || 0),
          instruction: match?.[2] || line
        };
      });
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function targetWidth(text, handedness) {
    const isRightSidePlayer = handedness === "left";
    const sideDefault = isRightSidePlayer ? 78 : 22;
    const sideWide = isRightSidePlayer ? 88 : 12;
    const sideInside = isRightSidePlayer ? 68 : 32;
    const bodyLane = isRightSidePlayer ? 60 : 40;
    const crossLane = isRightSidePlayer ? 35 : 65;

    if (/midden|mid-court|mid court|middle|service-simulatie.*midden/i.test(text)) {
      return 50;
    }
    if (/body|rackethand|heup/i.test(text)) {
      return bodyLane;
    }
    if (/cross/i.test(text)) {
      return crossLane;
    }
    if (/dtl|lijn/i.test(text)) {
      return sideWide;
    }
    if (/voeten|chiquita|service line|servicelijn/i.test(text)) {
      return sideInside;
    }
    if (/hoek|corner|backglass|achterglas|backhandhoek|forehandhoek/i.test(text)) {
      return sideWide;
    }
    if (/t\b|low t|t-ball/i.test(text)) {
      return 50;
    }
    return sideDefault;
  }

  function valuesFromInstruction(instruction, handedness) {
    const text = instruction.toLowerCase();
    const shot = {
      Speed: 22,
      Spin: 0,
      Freq: 40,
      Width: targetWidth(text, handedness),
      Height: 32
    };

    if (/service-simulatie|service/i.test(text)) {
      shot.Speed = 23;
      shot.Freq = 60;
      shot.Height = 36;
    }

    if (/backglass|achterglas|hoekbal|corner|diepe bal|diep/i.test(text)) {
      shot.Speed = 25;
      shot.Freq = 30;
      shot.Height = 20;
    }

    if (/netbal|volley|drukreturn/i.test(text)) {
      shot.Speed = 22;
      shot.Freq = 60;
      shot.Height = 32;
    }

    if (/lage|low|voeten|chiquita|t-ball|body|low t/i.test(text)) {
      shot.Height = 26;
    }

    if (/halfhoge/i.test(text)) {
      shot.Height = 40;
    }

    if (/\bhoge\b|\blob\b|\breset\b/i.test(text)) {
      shot.Speed = 16;
      shot.Freq = 30;
      shot.Height = 82;
    }

    if (/bandeja/i.test(text)) {
      shot.Speed = 15;
      shot.Freq = 30;
      shot.Height = 70;
    }

    if (/vibora/i.test(text)) {
      shot.Speed = 17;
      shot.Spin = -20;
      shot.Freq = 35;
      shot.Height = 68;
    }

    if (/smash/i.test(text)) {
      shot.Speed = 14;
      shot.Freq = 30;
      shot.Height = 88;
    }

    if (/bajada/i.test(text)) {
      shot.Speed = 16;
      shot.Spin = 50;
      shot.Freq = 30;
      shot.Height = 90;
    }

    if (/medium-hard/i.test(text)) {
      shot.Speed += 3;
    } else if (/medium-slow/i.test(text)) {
      shot.Speed -= 2;
    } else if (/medium/i.test(text)) {
      shot.Speed += 0;
    }

    if (/medium-laag/i.test(text)) {
      shot.Height = Math.min(shot.Height, 28);
    }

    shot.Speed = clamp(shot.Speed, 10, 35);
    shot.Spin = clamp(shot.Spin, -50, 50);
    shot.Freq = clamp(shot.Freq, 20, 90);
    shot.Width = clamp(Math.round(shot.Width), 0, 100);
    shot.Height = clamp(shot.Height, 10, 95);

    return shot;
  }

  function buildPreset(exercise, handedness) {
    const variant = machineLinesFor(exercise, handedness);
    const variantCategory = handedness === "left" ? "Padel Studio - Links" : "Padel Studio - Rechts";
    const categoryPrograms = appPrograms[variantCategory] || {};
    const exerciseKey = String(exercise.id).padStart(2, "0");
    const programName = Object.keys(categoryPrograms).find((name) => name.startsWith(`${exerciseKey} - `));
    const appProgram = programName ? categoryPrograms[programName] : null;
    const fallbackBalls = ballObjectsFrom(variant.lines).map((ball) => ({
      ...ball,
      ...valuesFromInstruction(ball.instruction, handedness)
    }));
    const balls = appProgram
      ? appProgram.shots.map((shot, index) => ({
          ball: index + 1,
          instruction: ballObjectsFrom(variant.lines)[index]?.instruction || `Programmaschot ${index + 1}`,
          ...shot
        }))
      : fallbackBalls;

    return {
      machine: "PadelShooter 3A",
      exerciseId: exercise.id,
      title: exercise.title,
      shortTitle: exercise.shortTitle,
      handedness,
      playerProfile: variant.label,
      categoryName: variantCategory,
      programName: programName || `${exercise.id} ${exercise.shortTitle} ${handedness === "left" ? "L" : "R"}`,
      route: exercise.routeName || exercise.primaryRoute || "",
      totalBalls: exercise.totalBalls,
      sequence: exercise.sequence,
      focus: exercise.habitFocus || "",
      machineSetup: variant.lines,
      balls,
      appImportProgram: appProgram ? { [variantCategory]: { [programName]: appProgram } } : null,
      disclaimer
    };
  }

  function enrichExercise(exercise) {
    exercise.machineVariants = {
      left: machineLinesFor(exercise, "left"),
      right: machineLinesFor(exercise, "right")
    };
    exercise.padelShooterPreset = {
      left: buildPreset(exercise, "left"),
      right: buildPreset(exercise, "right")
    };
  }

  exercises.forEach(enrichExercise);

  window.PADELSHOOTER_DISCLAIMER = disclaimer;
  window.buildPadelShooterPreset = buildPreset;
  window.buildPadelShooterCatalog = function buildPadelShooterCatalog(items, handedness, filters = {}) {
    const variants = handedness === "all" ? ["left", "right"] : [handedness];
    const importPayload = {};

    variants.forEach((variantKey) => {
      const variantCategory = variantKey === "left" ? "Padel Studio - Links" : "Padel Studio - Rechts";
      importPayload[variantCategory] = {};

      items.forEach((exercise) => {
        const preset = buildPreset(exercise, variantKey);
        if (preset.appImportProgram?.[variantCategory]?.[preset.programName]) {
          importPayload[variantCategory][preset.programName] = preset.appImportProgram[variantCategory][preset.programName];
        }
      });

      if (!Object.keys(importPayload[variantCategory]).length) {
        delete importPayload[variantCategory];
      }
    });

    if (Object.keys(importPayload).length) {
      return importPayload;
    }

    return {
      machine: "PadelShooter 3A",
      handedness,
      exportedAt: new Date().toISOString(),
      filters,
      exercises: items.map((exercise) => {
        if (variants.length === 1) {
          return buildPreset(exercise, variants[0]);
        }

        return {
          exerciseId: exercise.id,
          title: exercise.title,
          shortTitle: exercise.shortTitle,
          route: exercise.routeName || exercise.primaryRoute || "",
          totalBalls: exercise.totalBalls,
          sequence: exercise.sequence,
          variants: {
            left: buildPreset(exercise, "left"),
            right: buildPreset(exercise, "right")
          },
          disclaimer
        };
      })
    };
  };
})();
