const EXERCISES = Array.isArray(window.EXERCISE_BLUEPRINTS) ? window.EXERCISE_BLUEPRINTS : [];

const state = {
  handedness: "left",
  level: "all",
  type: "all"
};

const elements = {
  handedness: document.querySelector("#handedness"),
  level: document.querySelector("#level"),
  type: document.querySelector("#type"),
  title: document.querySelector("#results-title"),
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

function filteredExercises() {
  return EXERCISES.filter((exercise) => {
    if (state.level !== "all" && exercise.level !== state.level) {
      return false;
    }
    if (state.type !== "all" && exercise.type !== state.type) {
      return false;
    }
    return true;
  });
}

function updateHeading() {
  elements.title.textContent = `${handednessLabel(state.handedness)} machine-oefeningen`;
}

function renderList() {
  const items = filteredExercises();
  elements.count.textContent = `${items.length} oefeningen`;

  elements.list.innerHTML = items
    .map(
      (exercise) => `
        <article class="exercise-result">
          <div class="result-band" style="--card-color:${exercise.categoryColor}"></div>
          <div class="result-body">
            <span class="eyebrow">Oefening ${exercise.id}</span>
            <h3 class="result-title">${exercise.title}</h3>
            <p>${exercise.summary}</p>
            <div class="meta-row">
              <span class="meta-pill">${handednessLabel(state.handedness)}</span>
              <span class="meta-pill">${exercise.levelLabel} · KNLTB ${exercise.knltb}</span>
              <span class="meta-pill">${exercise.typeLabel}</span>
              <span class="meta-pill">${exercise.totalBalls}</span>
            </div>
            <a class="result-button result-link" href="./exercise.html?id=${exercise.id}&handedness=${state.handedness}">
              Bekijk oefening
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function bindEvents() {
  elements.handedness.addEventListener("change", () => {
    state.handedness = elements.handedness.value;
    updateHeading();
    renderList();
  });

  elements.level.addEventListener("change", () => {
    state.level = elements.level.value;
    renderList();
  });

  elements.type.addEventListener("change", () => {
    state.type = elements.type.value;
    renderList();
  });
}

function init() {
  updateHeading();
  renderList();
  bindEvents();
}

init();
