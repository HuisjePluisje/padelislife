(function () {
  const core = window.TrainingProgramsCore;
  if (!core || !Array.isArray(core.programs)) {
    return;
  }

  const programs = core.programs.slice();
  const elements = {
    knltb: document.getElementById("program-filter-knltb"),
    duration: document.getElementById("program-filter-duration"),
    theme: document.getElementById("program-filter-theme"),
    handedness: document.getElementById("program-filter-handedness"),
    resultsText: document.getElementById("program-results-text"),
    grid: document.getElementById("program-grid")
  };

  const state = {
    knltb: "all",
    duration: "all",
    theme: "all",
    handedness: "all"
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function readUrlState() {
    const params = new URLSearchParams(window.location.search);
    state.knltb = params.get("knltb") || "all";
    state.duration = params.get("duration") || "all";
    state.theme = params.get("theme") || "all";
    state.handedness = params.get("handedness") || "all";
  }

  function writeUrlState() {
    const params = new URLSearchParams();

    if (state.knltb !== "all") {
      params.set("knltb", state.knltb);
    }
    if (state.duration !== "all") {
      params.set("duration", state.duration);
    }
    if (state.theme !== "all") {
      params.set("theme", state.theme);
    }
    if (state.handedness !== "all") {
      params.set("handedness", state.handedness);
    }

    const query = params.toString();
    const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState({}, "", nextUrl);
  }

  function syncFilterInputs() {
    elements.knltb.value = state.knltb;
    elements.duration.value = state.duration;
    elements.theme.value = state.theme;
    elements.handedness.value = state.handedness;
  }

  function matchesFilters(program) {
    if (state.knltb !== "all" && program.knltbLabel !== state.knltb) {
      return false;
    }
    if (state.duration !== "all" && String(program.durationMinutes) !== state.duration) {
      return false;
    }
    if (state.theme !== "all" && program.themeLabel !== state.theme) {
      return false;
    }
    if (state.handedness !== "all" && program.handednessParam !== state.handedness) {
      return false;
    }
    return true;
  }

  function getFilteredPrograms() {
    return programs.filter(matchesFilters);
  }

  function buildProgramHref(programId) {
    return `./training-programma.html?id=${encodeURIComponent(programId)}`;
  }

  function renderCards(filteredPrograms) {
    if (!filteredPrograms.length) {
      elements.grid.innerHTML = `
        <article class="module-card program-card">
          <div class="module-card-header">
            <h3>Geen trainingsprogramma’s gevonden</h3>
            <span class="module-format">Reset</span>
          </div>
          <p>Probeer een bredere filtercombinatie. Alle programma’s blijven gebaseerd op oefeningen 01 t/m 39.</p>
        </article>
      `;
      return;
    }

    elements.grid.innerHTML = filteredPrograms
      .map((program) => {
        const href = buildProgramHref(program.id);
        const sequence = escapeHtml(program.exerciseIds.join(" → "));
        return `
          <article class="module-card program-card">
            <div class="module-card-header">
              <h3><a class="program-title-link" href="${href}">${escapeHtml(program.title)}</a></h3>
              <span class="module-format">${escapeHtml(program.id)}</span>
            </div>
            <div class="meta-row">
              <span class="meta-pill">${escapeHtml(program.knltbLabel)}</span>
              <span class="meta-pill">${escapeHtml(program.durationLabel)}</span>
              <span class="meta-pill">${escapeHtml(program.handednessLabel)}</span>
              <span class="meta-pill meta-pill-soft">${escapeHtml(program.themeLabel)}</span>
            </div>
            <div class="content-box program-profile-box">
              <h4>Spelerprofiel</h4>
              <p>${escapeHtml(program.profileSummary)}</p>
            </div>
            <div class="program-sequence">${sequence}</div>
            <p>${escapeHtml(program.goal)}</p>
            <div class="content-box program-kpi-box">
              <h4>Succescriterium / KPI</h4>
              <p>${escapeHtml(program.successCriterionKpi)}</p>
            </div>
            <a class="toolbar-button" href="${href}">Bekijk trainingsprogramma</a>
          </article>
        `;
      })
      .join("");
  }

  function render() {
    const filteredPrograms = getFilteredPrograms();
    elements.resultsText.textContent = `${filteredPrograms.length} van ${programs.length} trainingsprogramma’s`;
    renderCards(filteredPrograms);
    writeUrlState();
  }

  function handleFilterChange() {
    state.knltb = elements.knltb.value;
    state.duration = elements.duration.value;
    state.theme = elements.theme.value;
    state.handedness = elements.handedness.value;
    render();
  }

  readUrlState();
  syncFilterInputs();
  render();

  [elements.knltb, elements.duration, elements.theme, elements.handedness].forEach((element) => {
    element.addEventListener("change", handleFilterChange);
  });
})();
