(function () {
  const data = window.TRAINING_PROGRAMS_DATA;
  if (!data || !Array.isArray(data.programs)) {
    return;
  }

  const programs = data.programs.slice();
  const elements = {
    player: document.getElementById("program-filter-player"),
    level: document.getElementById("program-filter-level"),
    duration: document.getElementById("program-filter-duration"),
    type: document.getElementById("program-filter-type"),
    resultsText: document.getElementById("program-results-text"),
    grid: document.getElementById("program-grid"),
    detail: document.getElementById("program-detail"),
    detailIntro: document.getElementById("program-detail-intro")
  };

  const state = {
    player: "all",
    level: "all",
    duration: "all",
    type: "all",
    program: ""
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatLevel(level) {
    if (level === "beginner-plus") {
      return "Beginner+";
    }
    if (level === "beginner") {
      return "Beginner";
    }
    if (level === "advanced") {
      return "Advanced";
    }
    return level;
  }

  function normalizeLevel(level) {
    return level && level.indexOf("beginner") === 0 ? "beginner" : level;
  }

  function readUrlState() {
    const params = new URLSearchParams(window.location.search);
    state.player = params.get("player") || "all";
    state.level = params.get("level") || "all";
    state.duration = params.get("duration") || "all";
    state.type = params.get("type") || "all";
    state.program = params.get("program") || "";
  }

  function writeUrlState() {
    const params = new URLSearchParams();
    if (state.player !== "all") {
      params.set("player", state.player);
    }
    if (state.level !== "all") {
      params.set("level", state.level);
    }
    if (state.duration !== "all") {
      params.set("duration", state.duration);
    }
    if (state.type !== "all") {
      params.set("type", state.type);
    }
    if (state.program) {
      params.set("program", state.program);
    }
    const query = params.toString();
    const nextUrl = query ? `${window.location.pathname}?${query}${window.location.hash}` : `${window.location.pathname}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
  }

  function syncFilterInputs() {
    elements.player.value = state.player;
    elements.level.value = state.level;
    elements.duration.value = state.duration;
    elements.type.value = state.type;
  }

  function matchesFilters(program) {
    if (state.player !== "all" && program.player !== state.player) {
      return false;
    }
    if (state.level !== "all" && normalizeLevel(program.level) !== state.level) {
      return false;
    }
    if (state.duration !== "all" && String(program.durationMinutes) !== state.duration) {
      return false;
    }
    if (state.type !== "all" && program.playerType !== state.type) {
      return false;
    }
    return true;
  }

  function getFilteredPrograms() {
    return programs.filter(matchesFilters);
  }

  function buildProgramHref(programId) {
    const params = new URLSearchParams();
    if (state.player !== "all") {
      params.set("player", state.player);
    }
    if (state.level !== "all") {
      params.set("level", state.level);
    }
    if (state.duration !== "all") {
      params.set("duration", state.duration);
    }
    if (state.type !== "all") {
      params.set("type", state.type);
    }
    params.set("program", programId);
    return `./training-programmas.html?${params.toString()}#program-detail-section`;
  }

  function renderCards(filteredPrograms) {
    if (!filteredPrograms.length) {
      elements.grid.innerHTML = `
        <article class="module-card program-card">
          <div class="module-card-header">
            <h3>Geen programma’s gevonden</h3>
            <span class="module-format">Reset</span>
          </div>
          <p>Probeer een bredere filtercombinatie. De programma’s blijven gebaseerd op bestaande oefeningen 01 t/m 39.</p>
        </article>
      `;
      return;
    }

    elements.grid.innerHTML = filteredPrograms
      .map((program) => {
        const href = buildProgramHref(program.id);
        const isSelected = program.id === state.program;
        const sequence = escapeHtml(program.exerciseIds.join(" → "));
        return `
          <article class="module-card program-card${isSelected ? " program-card-selected" : ""}">
            <div class="module-card-header">
              <h3><a class="program-title-link" href="${href}">${escapeHtml(program.title)}</a></h3>
              <span class="module-format">${escapeHtml(program.id)}</span>
            </div>
            <div class="meta-row">
              <span class="meta-pill">${escapeHtml(program.player)}</span>
              <span class="meta-pill">${escapeHtml(formatLevel(program.level))}</span>
              <span class="meta-pill">${escapeHtml(String(program.durationMinutes))} minuten</span>
              <span class="meta-pill meta-pill-soft">${escapeHtml(program.playerType)}</span>
            </div>
            <div class="program-sequence">${sequence}</div>
            <p>${escapeHtml(program.goal)}</p>
            <div class="content-box program-kpi-box">
              <h4>KPI</h4>
              <p>${escapeHtml(program.successCriterionKpi)}</p>
            </div>
            <a class="toolbar-button" href="${href}">Bekijk programma</a>
          </article>
        `;
      })
      .join("");
  }

  function renderDetail(program) {
    if (!program) {
      elements.detailIntro.textContent = "Er is nog geen programma geselecteerd.";
      elements.detail.innerHTML = "";
      return;
    }

    const exerciseLinkMarkup = program.exerciseLinks
      .map((link) => {
        const label = `Oefening ${link.exerciseId} · ${link.title}`;
        return `<a class="program-exercise-link" href="./${escapeHtml(link.url)}">${escapeHtml(label)}</a>`;
      })
      .join("");

    const blockMarkup = program.blocks
      .map((block) => {
        return `
          <li class="program-block-item">
            <div class="program-block-time">${escapeHtml(String(block.minutes))} min</div>
            <div class="program-block-copy">
              <strong>Oefening ${escapeHtml(block.exerciseId)} · ${escapeHtml(block.exerciseTitle)}</strong>
              <span>${escapeHtml(block.focus)}</span>
            </div>
          </li>
        `;
      })
      .join("");

    elements.detailIntro.textContent = `${program.id} · ${program.player} · ${program.durationMinutes} minuten`;
    elements.detail.innerHTML = `
      <article class="detail-recipe training-program-detail">
        <div class="recipe-header">
          <div>
            <p class="eyebrow">Programma ${escapeHtml(program.id)}</p>
            <h2>${escapeHtml(program.title)}</h2>
            <p class="detail-subtitle">${escapeHtml(program.logicalFlow)}</p>
          </div>
          <div class="recipe-badges">
            <span class="meta-pill">${escapeHtml(program.player)}</span>
            <span class="meta-pill">${escapeHtml(formatLevel(program.level))}</span>
            <span class="meta-pill">${escapeHtml(String(program.durationMinutes))} minuten</span>
          </div>
        </div>

        <div class="recipe-layout">
          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Doel & route</h3>
                <span class="module-format">${escapeHtml(program.playerType)}</span>
              </div>
              <div class="content-stack">
                <div class="content-box">
                  <h4>Doel</h4>
                  <p>${escapeHtml(program.goal)}</p>
                </div>
                <div class="content-box">
                  <h4>Logische oefenvolgorde</h4>
                  <p>${escapeHtml(program.exerciseIds.join(" → "))}</p>
                </div>
                <div class="content-box">
                  <h4>PadelShooter-side</h4>
                  <p>${escapeHtml(program.padelShooterSide)}</p>
                </div>
              </div>
            </div>
          </section>

          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Varianten & KPI</h3>
                <span class="module-format">Detail</span>
              </div>
              <div class="content-stack">
                <div class="content-box">
                  <h4>Celeste-variant</h4>
                  <p>${escapeHtml(program.celesteVariant)}</p>
                </div>
                <div class="content-box">
                  <h4>Jeremiah-variant</h4>
                  <p>${escapeHtml(program.jeremiahVariant)}</p>
                </div>
                <div class="content-box">
                  <h4>Succescriterium / KPI</h4>
                  <p>${escapeHtml(program.successCriterionKpi)}</p>
                </div>
                <div class="content-box">
                  <h4>Transfergame</h4>
                  <p>${escapeHtml(program.transferGame)}</p>
                </div>
              </div>
            </div>
          </section>

          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Oefeninglinks</h3>
                <span class="module-format">Klik door</span>
              </div>
              <div class="program-exercise-links">${exerciseLinkMarkup}</div>
              <div class="content-box">
                <h4>Coach noot</h4>
                <p>${escapeHtml(program.coachNote)}</p>
              </div>
            </div>
          </section>
        </div>

        <section class="section-block">
          <div class="section-header-block">
            <div class="section-title-group">
              <span class="section-icon">⏱</span>
              <span class="section-title">Blokken met minuten</span>
            </div>
          </div>
          <div class="section-body">
            <ul class="program-block-list">${blockMarkup}</ul>
          </div>
        </section>
      </article>
    `;
  }

  function render() {
    const filteredPrograms = getFilteredPrograms();
    if (!filteredPrograms.some((program) => program.id === state.program)) {
      state.program = filteredPrograms.length ? filteredPrograms[0].id : "";
    }

    const selectedProgram = filteredPrograms.find((program) => program.id === state.program) || null;
    elements.resultsText.textContent = `${filteredPrograms.length} van ${programs.length} programma’s`;
    renderCards(filteredPrograms);
    renderDetail(selectedProgram);
    writeUrlState();
  }

  function handleFilterChange() {
    state.player = elements.player.value;
    state.level = elements.level.value;
    state.duration = elements.duration.value;
    state.type = elements.type.value;
    render();
  }

  readUrlState();
  syncFilterInputs();
  render();

  [elements.player, elements.level, elements.duration, elements.type].forEach((element) => {
    element.addEventListener("change", handleFilterChange);
  });
})();
