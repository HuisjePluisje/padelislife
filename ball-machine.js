const EXERCISES = [
  ...(Array.isArray(window.EXERCISE_BLUEPRINTS) ? window.EXERCISE_BLUEPRINTS : []),
  ...(Array.isArray(window.EXTRA_EXERCISE_BLUEPRINTS) ? window.EXTRA_EXERCISE_BLUEPRINTS : [])
];

const ROUTES = Array.isArray(window.TRAINING_ROUTES) ? window.TRAINING_ROUTES : [];
const ROUTE_MAP = ROUTES.reduce((map, route) => {
  map[route.slug] = route;
  return map;
}, {});

const state = {
  handedness: "left",
  route: "all",
  level: "all",
  stroke: "all",
  problem: "all",
  machineRealism: "all",
  matchRealism: "all"
};

const elements = {
  handedness: document.querySelector("#handedness"),
  route: document.querySelector("#route"),
  level: document.querySelector("#level"),
  stroke: document.querySelector("#stroke"),
  problem: document.querySelector("#problem"),
  machineRealism: document.querySelector("#machine-realism"),
  matchRealism: document.querySelector("#match-realism"),
  downloadPresets: document.querySelector("#download-presets"),
  title: document.querySelector("#results-title"),
  note: document.querySelector("#results-subnote"),
  count: document.querySelector("#results-count"),
  list: document.querySelector("#exercise-list")
};

function handednessLabel(value) {
  if (value === "right") {
    return "Rechtshandig";
  }
  if (value === "all") {
    return "Links + rechts";
  }
  return "Linkshandig";
}

function handednessPlayerLabel(value) {
  if (value === "right") {
    return "rechtshandige";
  }
  if (value === "all") {
    return "links- en rechtshandige";
  }
  return "linkshandige";
}

function realismLabel(value) {
  if (value === "high") {
    return "Hoog";
  }
  if (value === "medium") {
    return "Gemiddeld";
  }
  if (value === "low") {
    return "Laag";
  }
  return value;
}

function titleCase(value) {
  if (!value) {
    return "";
  }

  return value
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function fillDynamicSelect(select, items, labelBuilder = (value) => value) {
  if (!select) {
    return;
  }

  const currentValue = select.value || "all";
  const existingFirstOption = select.querySelector("option[value='all']");

  select.innerHTML = existingFirstOption ? existingFirstOption.outerHTML : '<option value="all">Alles</option>';

  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = labelBuilder(item.label);
    select.appendChild(option);
  });

  select.value = items.some((item) => item.value === currentValue) ? currentValue : "all";
}

function uniqueTagOptions(key) {
  return [...new Set(EXERCISES.flatMap((exercise) => exercise[key] || []))]
    .sort((a, b) => a.localeCompare(b, "nl"))
    .map((value) => ({ value, label: titleCase(value) }));
}

function hydrateFilterOptions() {
  // Route definitions drive the route filter so empty or future routes can still exist in the IA without hardcoding UI twice.
  fillDynamicSelect(
    elements.route,
    ROUTES.map((route) => ({ value: route.slug, label: route.name }))
  );
  fillDynamicSelect(elements.stroke, uniqueTagOptions("strokeTags"));
  fillDynamicSelect(elements.problem, uniqueTagOptions("problemTags"));
}

function filteredExercises() {
  return EXERCISES.filter((exercise) => {
    if (state.route !== "all" && exercise.primaryRoute !== state.route) {
      return false;
    }
    if (state.level !== "all" && exercise.level !== state.level) {
      return false;
    }
    if (state.stroke !== "all" && !(exercise.strokeTags || []).includes(state.stroke)) {
      return false;
    }
    if (state.problem !== "all" && !(exercise.problemTags || []).includes(state.problem)) {
      return false;
    }
    if (state.machineRealism !== "all" && exercise.audit?.machineRealism !== state.machineRealism) {
      return false;
    }
    if (state.matchRealism !== "all" && exercise.audit?.matchRealism !== state.matchRealism) {
      return false;
    }
    return true;
  });
}

function sortedExercises(items) {
  return [...items].sort((a, b) => {
    if (state.route !== "all") {
      const aOrder = a.audit?.routeOrder ?? 999;
      const bOrder = b.audit?.routeOrder ?? 999;
      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }
    }

    return Number(a.id) - Number(b.id);
  });
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function updateHeading() {
  const route = ROUTE_MAP[state.route];
  const handLabel = handednessLabel(state.handedness);

  elements.title.textContent = route ? `${route.name} voor ${handednessPlayerLabel(state.handedness)} speler` : `${handLabel} machine-oefeningen`;

  if (route) {
    const progression = Array.isArray(route.progression) && route.progression.length
      ? `Route-opbouw: ${route.progression[0]} → ${route.progression[route.progression.length - 1]}.`
      : "";
    elements.note.textContent = `${route.summary} Probleem: ${route.problem} ${progression}`.trim();
    return;
  }

  elements.note.textContent =
    "Filter op trainingsroute, slagfamilie en probleemgebied om sneller in een logische route te trainen.";
}

function renderList() {
  const items = sortedExercises(filteredExercises());
  const detailHandedness = state.handedness === "all" ? "left" : state.handedness;
  elements.count.textContent = `${items.length} oefeningen`;

  if (!items.length) {
    elements.list.innerHTML = `
      <article class="exercise-result exercise-result-empty">
        <div class="result-body">
          <span class="eyebrow">Geen match</span>
          <h3 class="result-title">Geen oefeningen binnen deze combinatie</h3>
          <p>Maak één filter wat ruimer of kies een andere trainingsroute. Zo houden we de route-opbouw logisch in plaats van willekeurig.</p>
        </div>
      </article>
    `;
    return;
  }

  elements.list.innerHTML = items
    .map((exercise) => {
      const route = ROUTE_MAP[exercise.primaryRoute];
      const scoreGuide = exercise.scoreGuide || {};

      return `
        <article class="exercise-result">
          <div class="result-band" style="--card-color:${exercise.categoryColor}"></div>
          <div class="result-body">
            <span class="eyebrow">Oefening ${exercise.id}</span>
            <h3 class="result-title">${exercise.title}</h3>
            <p>${exercise.summary}</p>
            <div class="meta-row">
              <span class="meta-pill">${handednessLabel(state.handedness)}</span>
              <span class="meta-pill">${exercise.levelLabel} · KNLTB ${exercise.knltb}</span>
              <span class="meta-pill">${route ? route.name : exercise.category}</span>
              <span class="meta-pill">Machine ${realismLabel(exercise.audit?.machineRealism)}</span>
              <span class="meta-pill">Wedstrijd ${realismLabel(exercise.audit?.matchRealism)}</span>
            </div>
            <div class="route-chip-row">
              ${(exercise.strokeTags || []).slice(0, 3).map((tag) => `<span class="meta-pill meta-pill-soft">${titleCase(tag)}</span>`).join("")}
            </div>
            <div class="result-quality-grid">
              <div class="quality-card quality-card-green">
                <strong>Groen</strong>
                <p>${scoreGuide.green || "Wedstrijdecht en herhaalbaar."}</p>
              </div>
              <div class="quality-card quality-card-red">
                <strong>Rood</strong>
                <p>${scoreGuide.red || "Fout patroon."}</p>
              </div>
            </div>
            <a class="result-button result-link" href="./exercise.html?id=${exercise.id}&handedness=${detailHandedness}">
              Bekijk oefening
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

function bindEvents() {
  [
    ["handedness", "handedness"],
    ["route", "route"],
    ["level", "level"],
    ["stroke", "stroke"],
    ["problem", "problem"],
    ["machineRealism", "machineRealism"],
    ["matchRealism", "matchRealism"]
  ].forEach(([elementKey, stateKey]) => {
    const element = elements[elementKey];
    if (!element) {
      return;
    }

    element.addEventListener("change", () => {
      state[stateKey] = element.value;
      updateHeading();
      renderList();
    });
  });

  if (elements.downloadPresets) {
    elements.downloadPresets.addEventListener("click", () => {
      const items = sortedExercises(filteredExercises());
      const data = window.buildPadelShooterCatalog
        ? window.buildPadelShooterCatalog(items, state.handedness, {
            route: state.route,
            level: state.level,
            stroke: state.stroke,
            problem: state.problem,
            machineRealism: state.machineRealism,
            matchRealism: state.matchRealism
          })
        : {};
      const handLabel = state.handedness === "all" ? "left-right" : state.handedness;
      const filename = `padelshooter-presets-${handLabel}-${state.route}.json`;
      downloadJson(data, filename);
    });
  }
}

function init() {
  hydrateFilterOptions();
  updateHeading();
  renderList();
  bindEvents();

  const libraryCount = document.querySelector("#library-count");
  if (libraryCount) {
    libraryCount.textContent = `${EXERCISES.length} oefeningen`;
  }
}

init();
