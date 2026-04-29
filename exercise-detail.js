const EXERCISES = [
  ...(Array.isArray(window.EXERCISE_BLUEPRINTS) ? window.EXERCISE_BLUEPRINTS : []),
  ...(Array.isArray(window.EXTRA_EXERCISE_BLUEPRINTS) ? window.EXTRA_EXERCISE_BLUEPRINTS : [])
];
const STRATEGY_TOPICS = Array.isArray(window.STRATEGY_TOPICS) ? window.STRATEGY_TOPICS : [];
const TRAINING_ROUTES = Array.isArray(window.TRAINING_ROUTES) ? window.TRAINING_ROUTES : [];
const ROUTE_MAP = TRAINING_ROUTES.reduce((map, route) => {
  map[route.slug] = route;
  return map;
}, {});

const params = new URLSearchParams(window.location.search);
const exerciseId = params.get("id") || EXERCISES[0]?.id;
const handedness = params.get("handedness") === "right" ? "right" : "left";

const elements = {
  hero: document.querySelector("#exercise-hero"),
  category: document.querySelector("#exercise-category"),
  title: document.querySelector("#exercise-title"),
  subtitle: document.querySelector("#exercise-subtitle"),
  stats: document.querySelector("#exercise-stats"),
  handedness: document.querySelector("#exercise-handedness"),
  context: document.querySelector("#exercise-context"),
  variant: document.querySelector("#exercise-variant"),
  goal: document.querySelector("#exercise-goal"),
  setup: document.querySelector("#exercise-setup"),
  targets: document.querySelector("#exercise-targets"),
  execution: document.querySelector("#exercise-execution"),
  score: document.querySelector("#exercise-score"),
  machine: document.querySelector("#exercise-machine"),
  route: document.querySelector("#exercise-route"),
  full: document.querySelector("#exercise-full"),
  strategy: document.querySelector("#exercise-strategy-links")
};

function handednessLabel(value) {
  return value === "right" ? "Rechtshandig" : "Linkshandig";
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
  return value || "-";
}

function findExercise() {
  return EXERCISES.find((exercise) => exercise.id === exerciseId) || EXERCISES[0];
}

function infoItems(items) {
  return items
    .map(
      (item) => `
        <div class="info-item">
          <div class="info-text">${typeof item === "string" ? item : `<strong>${item.title}</strong><br>${item.text}`}</div>
        </div>
      `
    )
    .join("");
}

function contentBlocks(items) {
  const blocks = Array.isArray(items) ? items : [items];
  return blocks
    .map((item) => {
      if (typeof item === "string") {
        return `<div class="content-block"><p>${item}</p></div>`;
      }

      if (item.type === "list") {
        return `
          <div class="content-block">
            ${item.title ? `<h4>${item.title}</h4>` : ""}
            <ul>${(item.items || []).map((entry) => `<li>${entry}</li>`).join("")}</ul>
          </div>
        `;
      }

      return `
        <div class="content-block">
          ${item.title ? `<h4>${item.title}</h4>` : ""}
          <p>${item.text || ""}</p>
        </div>
      `;
    })
    .join("");
}

function targetItems(items) {
  return items
    .map(
      (item, index) => `
        <div class="target-item">
          <div class="target-number">${index + 1}</div>
          <div class="target-name">${item.name}</div>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function executionItems(items) {
  return items
    .map(
      (item, index) => `
        <div class="step-card-visual">
          <div class="step-number">${index + 1}</div>
          <div class="step-title">${item.title}</div>
          <p>${item.text}</p>
        </div>
      `
    )
    .join("");
}

function scoreItems(items) {
  return `
    <div class="content-block">
      <p><strong>Score op patroontrouw, timing en kwaliteit van de gekozen oplossing.</strong></p>
    </div>
    <div class="score-grid">
      ${items
        .map(
          (item) => `
            <div class="score-item">
              <div class="score-points">1pt</div>
              <p>${item}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function scoreGuideItems(scoreGuide) {
  if (!scoreGuide) {
    return "";
  }

  return `
    <div class="traffic-score-grid">
      <div class="traffic-score-card traffic-score-card-green">
        <span class="traffic-score-label">Groen</span>
        <p>${scoreGuide.green}</p>
      </div>
      <div class="traffic-score-card traffic-score-card-orange">
        <span class="traffic-score-label">Oranje</span>
        <p>${scoreGuide.orange}</p>
      </div>
      <div class="traffic-score-card traffic-score-card-red">
        <span class="traffic-score-label">Rood</span>
        <p>${scoreGuide.red}</p>
      </div>
    </div>
  `;
}

function routeBlock(exercise) {
  const route = ROUTE_MAP[exercise.primaryRoute] || exercise.routeDetails;
  const secondaryRoutes = (exercise.secondaryRoutes || [])
    .map((slug) => ROUTE_MAP[slug]?.name)
    .filter(Boolean);

  if (!route) {
    return "";
  }

  return `
    <div class="training-route-card">
      <div class="content-box">
        <h4>Primaire route</h4>
        <p><strong>${route.name}</strong></p>
        <p>${route.summary}</p>
        <div class="meta-row">
          <span class="meta-pill">Stap ${exercise.audit?.routeOrder || "-"}</span>
          <span class="meta-pill">Machine ${realismLabel(exercise.audit?.machineRealism)}</span>
          <span class="meta-pill">Wedstrijd ${realismLabel(exercise.audit?.matchRealism)}</span>
        </div>
      </div>
      <div class="training-route-grid">
        <div class="content-box">
          <h4>Gewoonte die je traint</h4>
          <p>${exercise.habitFocus || route.defaultHabit}</p>
        </div>
        <div class="content-box">
          <h4>Fout die je afleert</h4>
          <p>${exercise.unlearnPattern || route.defaultUnlearn}</p>
        </div>
        <div class="content-box">
          <h4>Wanneer naar de volgende oefening?</h4>
          <p>${exercise.nextProgressionWhen || route.defaultNextGate}</p>
        </div>
      </div>
      ${
        secondaryRoutes.length
          ? `
            <div class="content-box">
              <h4>Secundaire routes</h4>
              <p>${secondaryRoutes.join(" · ")}</p>
            </div>
          `
          : ""
      }
    </div>
  `;
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

function machineVariantCard(variant, isActive, exercise, variantKey) {
  const ballRows = (exercise.padelShooterPreset?.[variantKey]?.balls || [])
    .map(
      (ball) => `
        <tr>
          <th>Schot ${ball.ball}</th>
          <td>${ball.Speed}</td>
          <td>${ball.Spin}</td>
          <td>${ball.Freq}</td>
          <td>${ball.Width}</td>
          <td>${ball.Height}</td>
        </tr>
      `
    )
    .join("");

  return `
    <article class="machine-variant-card ${isActive ? "machine-variant-card-active" : ""}">
      <div class="machine-variant-header">
        <div>
          <span class="topic-meta">Programma</span>
          <h4>${variant.label}</h4>
        </div>
        ${isActive ? '<span class="meta-pill">Actieve speler</span>' : ""}
      </div>
      <div class="content-box machine-program-card">
        <h4>Programmanaam</h4>
        <p>${exercise.padelShooterPreset?.[variantKey]?.programName || `${exercise.shortTitle} ${variant.label}`}</p>
        <p class="machine-program-meta">${exercise.padelShooterPreset?.[variantKey]?.categoryName || "PadelShooter import"}</p>
      </div>
      <div class="machine-values-table-wrap">
        <table class="machine-values-table">
          <thead>
            <tr>
              <th>Schot</th>
              <th>Speed</th>
              <th>Spin</th>
              <th>Freq</th>
              <th>Width</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            ${ballRows}
          </tbody>
        </table>
      </div>
      <ul class="machine-lines">
        ${variant.lines.map((line) => `<li>${line}</li>`).join("")}
      </ul>
      <div class="machine-actions">
        <button class="toolbar-button toolbar-button-small" type="button" data-machine-copy="${variantKey}">Kopieer preset</button>
        <button class="toolbar-button toolbar-button-small toolbar-button-ghost" type="button" data-machine-download="${variantKey}">Download app-programma</button>
      </div>
    </article>
  `;
}

function machineBlock(exercise) {
  const variantKey = handedness === "right" ? "right" : "left";
  const activeVariant = exercise.machineVariants?.[variantKey];
  const disclaimer = window.PADELSHOOTER_DISCLAIMER || "";

  if (!activeVariant) {
    return "";
  }

  return `
    <div class="machine-module">
      <div class="content-box">
        <h4>Instellingen voor deze speler</h4>
        <p>De spelerkeuze bovenaan bepaalt welke variant je nu ziet. Dus bij een linkshandige oefening tonen we alleen de linkse preset; bij rechtshandig alleen de rechtse.</p>
      </div>
      ${machineVariantCard(activeVariant, true, exercise, variantKey)}
      <div class="content-box machine-disclaimer">
        <h4>Disclaimer</h4>
        <p>${disclaimer}</p>
      </div>
    </div>
  `;
}

function relatedStrategy(exercise) {
  const map = {
    transitie: {
      topic: "transitie",
      subs: ["net-terugpakken", "eerste-bal-na-herstel", "de-chiquita"]
    },
    defense: {
      topic: "verdedigen",
      subs: ["verdedigen-vanuit-de-hoek", "verdedigen-op-body", "counter-moment"]
    },
    net: {
      topic: "aanvallen",
      subs: ["drukbal-vs-winnerbal", "aanvallen-op-body", "afmaken-aan-het-net"]
    },
    return: {
      topic: "slagen",
      subs: ["service-en-return", "lob-en-reset"]
    },
    ruimte: {
      topic: "aanvallen",
      subs: ["aanvallen-op-body", "drukbal-vs-winnerbal"]
    },
    decision: {
      topic: "wedstrijdsituaties",
      subs: ["eerste-drie-ballen", "grote-punten", "tegen-agressieve-netspelers"]
    }
  };

  const config = map[exercise.type] || map.transitie;
  const topic = STRATEGY_TOPICS.find((item) => item.slug === config.topic);
  if (!topic) {
    return "";
  }

  const subLinks = config.subs
    .map((slug) => topic.subtopics.find((item) => item.slug === slug))
    .filter(Boolean);

  return `
    <a class="strategy-mini-card" href="./strategy-topic.html?topic=${topic.slug}">
      <span class="topic-meta">Hoofdthema</span>
      <h4>${topic.title}</h4>
      <p>${topic.summary}</p>
    </a>
    ${subLinks
      .map(
        (item) => `
          <a class="strategy-mini-card strategy-mini-card-sub" href="./strategy-subtopic.html?topic=${topic.slug}&sub=${item.slug}">
            <span class="topic-meta">Substrategie</span>
            <h4>${item.title}</h4>
            <p>${item.summary}</p>
          </a>
        `
      )
      .join("")}
  `;
}

function fullBlocks(exercise) {
  const sections = [...exercise.coachView];

  return sections
    .map(
      (section) => `
        <div class="content-box">
          <h4>${section.title}</h4>
          ${section.text ? `<p>${section.text}</p>` : ""}
          ${section.bullets ? `<ul>${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>` : ""}
        </div>
      `
    )
    .join("");
}

function bindMachineActions(exercise) {
  document.querySelectorAll("[data-machine-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const variantKey = button.getAttribute("data-machine-copy");
      const preset = exercise.padelShooterPreset?.[variantKey];
      if (!preset) {
        return;
      }
      const text = preset.machineSetup.join("\n");
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Gekopieerd";
        window.setTimeout(() => {
          button.textContent = "Kopieer preset";
        }, 1200);
      } catch (_error) {
        button.textContent = "Kopiëren mislukt";
      }
    });
  });

  document.querySelectorAll("[data-machine-download]").forEach((button) => {
    button.addEventListener("click", () => {
      const variantKey = button.getAttribute("data-machine-download");
      const preset = exercise.padelShooterPreset?.[variantKey];
      if (!preset) {
        return;
      }
      downloadJson(
        preset.appImportProgram || preset,
        preset.appImportProgram
          ? `programs-${exercise.id}-${variantKey}.json`
          : `padelshooter-${exercise.id}-${variantKey}.json`
      );
    });
  });
}

function render() {
  const exercise = findExercise();
  if (!exercise) {
    return;
  }

  elements.hero.style.background = `linear-gradient(135deg, ${exercise.categoryColor} 0%, ${exercise.categoryColor}cc 100%)`;
  elements.category.textContent = exercise.category;
  elements.title.textContent = exercise.title;
  elements.subtitle.textContent = exercise.summary;
  elements.handedness.textContent = handednessLabel(handedness);
  elements.stats.innerHTML = `
    <div class="stat"><span class="stat-icon">🎾</span><span>${exercise.totalBalls}</span></div>
    <div class="stat"><span class="stat-icon">🔁</span><span>${exercise.sequence} · ${exercise.repeats}</span></div>
    <div class="stat"><span class="stat-icon">📈</span><span>${exercise.levelLabel} · KNLTB ${exercise.knltb}</span></div>
    <div class="stat"><span class="stat-icon">🧩</span><span>${exercise.typeLabel}</span></div>
  `;

  elements.context.innerHTML = `
    <div class="content-box">
      <h4>Wat train je hier?</h4>
      <p>${exercise.context}</p>
    </div>
    <div class="content-box">
      <h4>Waarom is dit relevant in wedstrijden?</h4>
      <p>${exercise.matchContext}</p>
    </div>
  `;
  elements.variant.innerHTML = infoItems(exercise.playerVariant[handedness] || exercise.playerVariant.left);
  elements.goal.innerHTML = contentBlocks(exercise.goal);
  elements.setup.innerHTML = infoItems(exercise.setup);
  elements.targets.innerHTML = targetItems(exercise.targets);
  elements.execution.innerHTML = executionItems(exercise.steps);
  elements.score.innerHTML = `${scoreItems(exercise.score)}${scoreGuideItems(exercise.scoreGuide)}`;
  elements.machine.innerHTML = machineBlock(exercise);
  elements.route.innerHTML = routeBlock(exercise);
  elements.full.innerHTML = fullBlocks(exercise);
  elements.strategy.innerHTML = relatedStrategy(exercise);
  bindMachineActions(exercise);
}

render();
