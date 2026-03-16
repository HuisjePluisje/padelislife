const MODULE_CONTENT = window.PADEL_MODULE_CONTENT || {};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inlineFormat(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function bulletList(items) {
  if (!items?.length) {
    return "";
  }

  return `<ul class="module-list">${items.map((item) => `<li>${inlineFormat(item)}</li>`).join("")}</ul>`;
}

function renderOneOnOne() {
  const root = document.querySelector("#one-on-one-grid");
  if (!root) {
    return;
  }

  const items = Array.isArray(MODULE_CONTENT.oneOnOne) ? MODULE_CONTENT.oneOnOne : [];
  const count = document.querySelector("#one-on-one-count");
  if (count) {
    count.textContent = String(items.length);
  }

  root.innerHTML = items
    .map(
      (item) => `
        <article class="module-card">
          <div class="module-card-header">
            <span class="topic-meta">${escapeHtml(item.category)}</span>
            <span class="module-format">${escapeHtml(item.format)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${inlineFormat(item.situation)}</p>
          <p class="module-context">${inlineFormat(item.context)}</p>
          <div class="module-block">
            <h4>Doel</h4>
            <p>${inlineFormat(item.goal)}</p>
          </div>
          <div class="module-block">
            <h4>Targets</h4>
            ${bulletList(item.targets)}
          </div>
          <div class="module-block">
            <h4>Fases</h4>
            <div class="module-phase-list">
              ${item.phases
                .map(
                  (phase) => `
                    <div class="module-phase">
                      <strong>${escapeHtml(phase.title)}</strong>
                      <p>${inlineFormat(phase.text)}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderOneVsTwo() {
  const root = document.querySelector("#one-vs-two-grid");
  if (!root) {
    return;
  }

  const items = Array.isArray(MODULE_CONTENT.oneVsTwo) ? MODULE_CONTENT.oneVsTwo : [];
  const count = document.querySelector("#one-vs-two-count");
  if (count) {
    count.textContent = String(items.length);
  }

  root.innerHTML = items
    .map(
      (item) => `
        <article class="module-card">
          <div class="module-card-header">
            <span class="topic-meta">${escapeHtml(item.category)}</span>
            <span class="module-format">${escapeHtml(item.format)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${inlineFormat(item.situation)}</p>
          <div class="module-block">
            <h4>Doel</h4>
            <p>${inlineFormat(item.goal)}</p>
          </div>
          <div class="module-block">
            <h4>Targets</h4>
            ${bulletList(item.targets)}
          </div>
          <div class="module-block">
            <h4>Coachfocus</h4>
            ${bulletList(item.coachTips)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderStrategy() {
  const strategy = MODULE_CONTENT.strategy;
  if (!strategy) {
    return;
  }

  const phases = document.querySelector("#strategy-phases");
  if (phases) {
    phases.innerHTML = (strategy.intro?.phases || [])
      .map(
        (phase, index) => `
          <article class="journey-step">
            <span class="journey-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(phase.split(" — ")[0])}</h3>
            <p>${inlineFormat(phase)}</p>
          </article>
        `
      )
      .join("");
  }

  const pillars = document.querySelector("#strategy-pillars");
  if (pillars) {
    pillars.innerHTML = (strategy.pillars || [])
      .map(
        (item) => `
          <article class="module-card">
            <div class="module-card-header">
              <span class="topic-meta">${escapeHtml(item.title)}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${inlineFormat(item.summary)}</p>
            <div class="module-block">
              <h4>Beslisregels</h4>
              ${bulletList(item.focus)}
            </div>
            <div class="module-block">
              <h4>Coachtaal</h4>
              ${bulletList(item.cues)}
            </div>
          </article>
        `
      )
      .join("");
  }

  const strokes = document.querySelector("#strategy-strokes");
  if (strokes) {
    strokes.innerHTML = (strategy.strokes || [])
      .map(
        (item) => `
          <article class="module-card module-card-compact">
            <div class="module-card-header">
              <span class="topic-meta">${escapeHtml(item.name)}</span>
            </div>
            <div class="module-block">
              <h4>Wanneer</h4>
              <p>${inlineFormat(item.when)}</p>
            </div>
            <div class="module-block">
              <h4>Doel</h4>
              <p>${inlineFormat(item.goal)}</p>
            </div>
            <div class="module-block">
              <h4>Beslisregel</h4>
              <p>${inlineFormat(item.rule)}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  const duoPrinciples = document.querySelector("#strategy-duo-principles");
  if (duoPrinciples) {
    duoPrinciples.innerHTML = (strategy.duo?.principles || [])
      .map(
        (item) => `
          <article class="principle-card">
            <h3>${escapeHtml(item.split(" ")[0])}</h3>
            <p>${inlineFormat(item)}</p>
          </article>
        `
      )
      .join("");
  }

  const duoRoles = document.querySelector("#strategy-duo-roles");
  if (duoRoles) {
    duoRoles.innerHTML = [
      {
        label: "Rechterkant",
        items: strategy.duo?.rightSide || []
      },
      {
        label: "Linkerkant",
        items: strategy.duo?.leftSide || []
      },
      {
        label: "Communicatie",
        items: strategy.duo?.communication || []
      }
    ]
      .map(
        (group) => `
          <article class="topic-card">
            <div class="topic-meta">${escapeHtml(group.label)}</div>
            <h3>${escapeHtml(group.label)}</h3>
            ${bulletList(group.items)}
          </article>
        `
      )
      .join("");
  }

  const matchplay = document.querySelector("#strategy-matchplay");
  if (matchplay) {
    matchplay.innerHTML = (strategy.matchplay || [])
      .filter((item) => item.title.startsWith("6."))
      .map(
        (item) => `
          <article class="module-card module-card-compact">
            <div class="module-card-header">
              <span class="topic-meta">${escapeHtml(item.title)}</span>
            </div>
            <p>${inlineFormat(item.summary)}</p>
            <div class="module-block">
              <h4>Beslisregels</h4>
              ${bulletList(item.rules)}
            </div>
          </article>
        `
      )
      .join("");
  }
}

renderOneOnOne();
renderOneVsTwo();
renderStrategy();
