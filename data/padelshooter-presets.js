(function buildPadelShooterPresets() {
  const disclaimer =
    "Disclaimer: deze instellingen zijn praktische richtlijnen voor de PadelShooter 3A. Zie ze als startpunt en finetune op baan, ballen en spelniveau.";
  const exercises = [
    ...(Array.isArray(window.EXERCISE_BLUEPRINTS) ? window.EXERCISE_BLUEPRINTS : []),
    ...(Array.isArray(window.EXTRA_EXERCISE_BLUEPRINTS) ? window.EXTRA_EXERCISE_BLUEPRINTS : [])
  ];

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

  function buildPreset(exercise, handedness) {
    const variant = machineLinesFor(exercise, handedness);
    return {
      machine: "PadelShooter 3A",
      exerciseId: exercise.id,
      title: exercise.title,
      shortTitle: exercise.shortTitle,
      handedness,
      playerProfile: variant.label,
      route: exercise.routeName || exercise.primaryRoute || "",
      totalBalls: exercise.totalBalls,
      sequence: exercise.sequence,
      focus: exercise.habitFocus || "",
      machineSetup: variant.lines,
      balls: ballObjectsFrom(variant.lines),
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
