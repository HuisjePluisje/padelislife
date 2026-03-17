const EXERCISES = [
  ...(Array.isArray(window.EXERCISE_BLUEPRINTS) ? window.EXERCISE_BLUEPRINTS : []),
  ...(Array.isArray(window.EXTRA_EXERCISE_BLUEPRINTS) ? window.EXTRA_EXERCISE_BLUEPRINTS : [])
];
const STRATEGY_TOPICS = Array.isArray(window.STRATEGY_TOPICS) ? window.STRATEGY_TOPICS : [];

const params = new URLSearchParams(window.location.search);
const exerciseId = params.get("id") || EXERCISES[0]?.id;
const handedness = params.get("handedness") || "left";

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
  full: document.querySelector("#exercise-full"),
  strategy: document.querySelector("#exercise-strategy-links")
};

function handednessLabel(value) {
  return value === "right" ? "Rechtshandig" : "Linkshandig";
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
  const sections = [
    ...exercise.coachView,
    {
      title: "PadelShooter 3A Instellingen",
      bullets: [
        ...exercise.machine,
        "Disclaimer: deze instellingen zijn praktische richtlijnen voor de PadelShooter 3A. Zie ze als startpunt en finetune op baan, ballen en spelniveau."
      ]
    }
  ];

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
  elements.score.innerHTML = scoreItems(exercise.score);
  elements.full.innerHTML = fullBlocks(exercise);
  elements.strategy.innerHTML = relatedStrategy(exercise);
}

render();
