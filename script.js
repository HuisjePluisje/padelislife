const categoryThemes = {
  "TRANSITIE & DOORSTAPPEN": {
    color: "#0D5517",
    label: "Transitie",
    toneClass: "tone-transition"
  },
  "NET-DOMINANTIE": {
    color: "#0D3B66",
    label: "Net",
    toneClass: "tone-net"
  },
  "RUIMTE CREEREN & UITSPELEN": {
    color: "#4A1C6A",
    label: "Ruimte",
    toneClass: "tone-space"
  },
  "RUIMTE CREËREN & UITSPELEN": {
    color: "#4A1C6A",
    label: "Ruimte",
    toneClass: "tone-space"
  },
  "DEFENSE & RECOVERY": {
    color: "#6B4226",
    label: "Defense",
    toneClass: "tone-defense"
  }
};

const state = {
  exercises: Array.isArray(window.EXERCISES) ? window.EXERCISES : [],
  activeCategory: "ALL",
  activeId: null,
  session: []
};

const modules = [
  {
    name: "PadelShooter Programma's",
    status: "Live",
    statusClass: "status-live",
    description:
      "De eerste kernmodule: een bibliotheek met machine-oefeningen, filters, detailweergave en sessie-opbouw.",
    meta: ["12 oefeningen", "4 categorieen", "Direct bruikbaar"]
  },
  {
    name: "1-op-1 Oefeningen",
    status: "Next",
    statusClass: "status-next",
    description:
      "Een aparte laag voor coach-speler formats zonder machine, met persoonlijke feedback, scorevormen en intensiteit.",
    meta: ["Coach + speler", "Correcties", "Persoonlijke progressie"]
  },
  {
    name: "3-Spelers Oefeningen",
    status: "Next",
    statusClass: "status-next",
    description:
      "Rotatievormen voor drie spelers: wachttijd laag, veel herhalingen en slimme rolwissels tussen druk en herstel.",
    meta: ["Rotatie", "Hoge bezetting", "Veel balcontacten"]
  },
  {
    name: "Volledige Academie",
    status: "Later",
    statusClass: "status-later",
    description:
      "Een overkoepelend platform waarin programma's, strategie, video, coachnotities en observatieformulieren samenkomen.",
    meta: ["Bibliotheek", "Strategie", "Coach dashboard"]
  }
];

const strategyTracks = [
  {
    badge: "Track 01",
    title: "Padel Chess",
    description:
      "Scenario's waarin spelers leren waarom een keuze klopt: lob of laag, cross of body, vasthouden of versnellen.",
    meta: ["Beslisregels", "Patronen", "Spelintelligentie"]
  },
  {
    badge: "Track 02",
    title: "Serve + Return Plans",
    description:
      "Vaste spelplannen per service- en return-situatie, zodat trainingen direct koppelen aan wedstrijdbeslissingen.",
    meta: ["Start van het punt", "Rechterkant", "Linkshandig profiel"]
  },
  {
    badge: "Track 03",
    title: "Duo Positionering",
    description:
      "Visuele patronen voor verschuiven, overnemen, knijpen en ruimte beschermen, vergelijkbaar met een tactisch bord.",
    meta: ["Teamspel", "Zones", "Ruimtebeheer"]
  }
];

const elements = {
  heroStats: document.querySelector("#hero-stats"),
  heroActiveCategory: document.querySelector("#hero-active-category"),
  moduleGrid: document.querySelector("#module-grid"),
  strategyGrid: document.querySelector("#strategy-grid"),
  filters: document.querySelector("#category-filters"),
  grid: document.querySelector("#exercise-grid"),
  detailNumber: document.querySelector("#detail-number"),
  detailTitle: document.querySelector("#detail-title"),
  detailCategory: document.querySelector("#detail-category"),
  detailSummary: document.querySelector("#detail-summary"),
  detailBalls: document.querySelector("#detail-balls"),
  detailFocus: document.querySelector("#detail-focus"),
  detailFlow: document.querySelector("#detail-flow"),
  detailOnepager: document.querySelector("#detail-onepager"),
  detailFull: document.querySelector("#detail-full"),
  addToSession: document.querySelector("#add-to-session"),
  sessionList: document.querySelector("#session-list"),
  sessionPlan: document.querySelector("#session-plan")
};

function normalizeCategory(category) {
  return category.replace("CREËREN", "CREEREN");
}

function themeFor(category) {
  return categoryThemes[category] || categoryThemes[normalizeCategory(category)] || {
    color: "#14261F",
    label: "Padel",
    toneClass: ""
  };
}

function filteredExercises() {
  if (state.activeCategory === "ALL") {
    return state.exercises;
  }

  return state.exercises.filter((exercise) => exercise.categorie === state.activeCategory);
}

function findExercise(nummer) {
  return state.exercises.find((exercise) => exercise.nummer === nummer);
}

function extractBallCount(content) {
  const match = content.match(/(\d+)\s*ballen/i);
  return match ? match[1] : "Onbekend";
}

function extractSummary(content) {
  const match = content.match(/\*\*Spelsituatie:\*\*\s*([^\n]+)/i);
  if (match) {
    return match[1].trim();
  }

  const cleaned = content
    .replace(/#+\s+/g, "")
    .replace(/\*\*/g, "")
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length > 40);

  return cleaned || "Tactische oefening met duidelijke patronen en wedstrijdfocus.";
}

function extractFocus(content) {
  const match = content.match(/\*\*Hoofddoel:\*\*\s*([\s\S]*?)(?:\n\n|\n---)/i);
  if (match) {
    return match[1].replace(/\*\*/g, "").trim();
  }

  return "Patroonherkenning en beslissen onder druk.";
}

function extractFlow(title) {
  return title
    .split("→")
    .map((part) => part.trim())
    .slice(0, 3)
    .join(" / ");
}

function extractOnepager(content) {
  const start = content.indexOf("### 🎯 Doel");
  const end = content.indexOf("### 👀 Observatie");
  if (start !== -1 && end !== -1) {
    return content.slice(start, end).trim();
  }

  return content.slice(0, 1200).trim();
}

function extractFullContent(content) {
  const start = content.indexOf("### 👀 Observatie");
  const trimmed = start !== -1 ? content.slice(start) : content;
  return trimmed.replace(/---PAGE_BREAK---/g, "").trim();
}

function splitSections(markdown) {
  const normalized = markdown
    .replace(/\r/g, "")
    .replace(/---/g, "")
    .replace(/`/g, "")
    .trim();

  const parts = normalized.split(/^###\s+/m).filter(Boolean);
  if (!parts.length) {
    return [{ title: "Inhoud", body: normalized }];
  }

  return parts.map((part) => {
    const lines = part.split("\n");
    const title = lines.shift().replace(/\*\*/g, "").trim();
    return {
      title,
      body: lines.join("\n").trim()
    };
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function inlineFormat(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function sectionToHtml(section) {
  const blocks = section.body.split(/\n\s*\n/).filter(Boolean);
  const html = blocks
    .map((block) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      if (lines.every((line) => line.startsWith("- "))) {
        const items = lines
          .map((line) => `<li>${inlineFormat(line.replace(/^- /, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${lines.map((line) => inlineFormat(line)).join("<br>")}</p>`;
    })
    .join("");

  return `<section class="rich-section"><h4>${escapeHtml(section.title)}</h4>${html}</section>`;
}

function renderHeroStats() {
  const items = [
    { label: "Oefeningen", value: String(state.exercises.length) },
    {
      label: "Categorieen",
      value: String(new Set(state.exercises.map((exercise) => exercise.categorie)).size)
    },
    {
      label: "Actieve view",
      value: state.activeCategory === "ALL" ? "Alles" : themeFor(state.activeCategory).label
    },
    {
      label: "Sessieblokken",
      value: String(state.session.length)
    }
  ];

  elements.heroStats.innerHTML = items
    .map(
      (item) => `
        <article class="stat-card lift-in">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");

  elements.heroActiveCategory.textContent =
    state.activeCategory === "ALL" ? "Alle categorieen" : state.activeCategory;
}

function renderFilters() {
  const categories = ["ALL", ...new Set(state.exercises.map((exercise) => exercise.categorie))];

  elements.filters.innerHTML = categories
    .map((category) => {
      const isActive = category === state.activeCategory;
      const label = category === "ALL" ? "Alles" : category;
      return `
        <button
          class="chip ${isActive ? "is-active" : ""}"
          type="button"
          data-category="${category}"
        >
          ${label}
        </button>
      `;
    })
    .join("");
}

function renderPlatform() {
  elements.moduleGrid.innerHTML = modules
    .map(
      (module) => `
        <article class="module-card lift-in">
          <span class="module-status ${module.statusClass}">${module.status}</span>
          <h3>${module.name}</h3>
          <p>${module.description}</p>
          <div class="module-meta">
            ${module.meta.map((item) => `<span class="strategy-badge">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  elements.strategyGrid.innerHTML = strategyTracks
    .map(
      (track) => `
        <article class="strategy-card lift-in">
          <span class="strategy-badge">${track.badge}</span>
          <h3>${track.title}</h3>
          <p>${track.description}</p>
          <div class="strategy-meta">
            ${track.meta.map((item) => `<span class="strategy-badge">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderGrid() {
  const exercises = filteredExercises();

  elements.grid.innerHTML = exercises
    .map((exercise, index) => {
      const theme = themeFor(exercise.categorie);
      const summary = extractSummary(exercise.content);
      const balls = extractBallCount(exercise.content);

      return `
        <article class="exercise-card lift-in" style="--category:${theme.color}; animation-delay:${index * 0.04}s">
          <span class="card-number">Oefening ${exercise.nummer}</span>
          <h3>${exercise.titel}</h3>
          <p class="exercise-summary">${summary}</p>
          <div class="exercise-meta">
            <span>${exercise.categorie}</span>
            <span>${balls} ballen</span>
          </div>
          <div class="session-card-actions">
            <button class="ghost-button" type="button" data-open="${exercise.nummer}">Open detail</button>
            <button class="ghost-button" type="button" data-add="${exercise.nummer}">+ sessie</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDetail() {
  const activeExercise = findExercise(state.activeId) || filteredExercises()[0] || state.exercises[0];

  if (!activeExercise) {
    return;
  }

  state.activeId = activeExercise.nummer;
  const theme = themeFor(activeExercise.categorie);

  elements.detailNumber.textContent = `Oefening ${activeExercise.nummer}`;
  elements.detailTitle.textContent = activeExercise.titel;
  elements.detailCategory.textContent = activeExercise.categorie;
  elements.detailCategory.style.color = theme.color;
  elements.detailSummary.textContent = extractSummary(activeExercise.content);
  elements.detailBalls.textContent = extractBallCount(activeExercise.content);
  elements.detailFocus.textContent = extractFocus(activeExercise.content);
  elements.detailFlow.textContent = extractFlow(activeExercise.titel);

  elements.detailOnepager.innerHTML = splitSections(extractOnepager(activeExercise.content))
    .map(sectionToHtml)
    .join("");

  elements.detailFull.innerHTML = splitSections(extractFullContent(activeExercise.content))
    .slice(0, 5)
    .map(sectionToHtml)
    .join("");
}

function renderSession() {
  if (!state.session.length) {
    elements.sessionList.innerHTML = `
      <div class="session-empty">
        Nog geen oefeningen geselecteerd. Voeg kaarten toe vanuit de bibliotheek of detailweergave.
      </div>
    `;
  } else {
    elements.sessionList.innerHTML = state.session
      .map((nummer, index) => {
        const exercise = findExercise(nummer);
        const theme = themeFor(exercise.categorie);
        return `
          <article class="session-card ${theme.toneClass}">
            <p class="session-step">Blok ${index + 1}</p>
            <h3>${exercise.titel}</h3>
            <p>${exercise.categorie}</p>
            <div class="session-card-actions">
              <span>${extractBallCount(exercise.content)} ballen</span>
              <button class="ghost-button" type="button" data-remove="${exercise.nummer}">Verwijder</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const plan = buildPlan();
  elements.sessionPlan.innerHTML = plan
    .map(
      (item) => `
        <article class="plan-item ${item.toneClass}">
          <p class="session-step">${item.step}</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <strong>${item.exercise}</strong>
        </article>
      `
    )
    .join("");
}

function buildPlan() {
  const defaults = [
    {
      step: "Blok 1",
      title: "Activeren in patroon",
      description: "Start met een herhaalbare vorm die timing en voetenwerk meteen activeert.",
      exercise: sessionTitleAt(0, "Kies eerst een openingsvorm"),
      toneClass: "tone-transition"
    },
    {
      step: "Blok 2",
      title: "Druk opbouwen",
      description: "Verplaats daarna naar een vorm waarin positie, herstel en netovername centraal staan.",
      exercise: sessionTitleAt(1, "Voeg een tweede oefening toe"),
      toneClass: "tone-net"
    },
    {
      step: "Blok 3",
      title: "Wedstrijdbeslissing",
      description: "Eindig met een beslissingsvorm waarin keuze, richting en druk samenvallen.",
      exercise: sessionTitleAt(2, "Kies een afsluitende drukvorm"),
      toneClass: "tone-space"
    }
  ];

  return defaults;
}

function sessionTitleAt(index, fallback) {
  const nummer = state.session[index];
  if (!nummer) {
    return fallback;
  }

  const exercise = findExercise(nummer);
  return `Oefening ${exercise.nummer}: ${exercise.titel}`;
}

function addToSession(nummer) {
  if (!state.session.includes(nummer)) {
    state.session.push(nummer);
  }

  renderHeroStats();
  renderSession();
}

function removeFromSession(nummer) {
  state.session = state.session.filter((item) => item !== nummer);
  renderHeroStats();
  renderSession();
}

function bindEvents() {
  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) {
      return;
    }

    state.activeCategory = button.dataset.category;
    const exercises = filteredExercises();
    if (!exercises.some((exercise) => exercise.nummer === state.activeId)) {
      state.activeId = exercises[0]?.nummer || state.exercises[0]?.nummer || null;
    }

    renderHeroStats();
    renderFilters();
    renderGrid();
    renderDetail();
  });

  elements.grid.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open]");
    const addButton = event.target.closest("[data-add]");

    if (openButton) {
      state.activeId = openButton.dataset.open;
      renderDetail();
      document.querySelector("#detail").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (addButton) {
      addToSession(addButton.dataset.add);
    }
  });

  elements.addToSession.addEventListener("click", () => {
    if (state.activeId) {
      addToSession(state.activeId);
    }
  });

  elements.sessionList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (!button) {
      return;
    }

    removeFromSession(button.dataset.remove);
  });
}

function init() {
  state.activeId = state.exercises[0]?.nummer || null;
  renderPlatform();
  renderHeroStats();
  renderFilters();
  renderGrid();
  renderDetail();
  renderSession();
  bindEvents();
}

init();
