(function () {
  const core = window.TrainingProgramsCore;
  const mount = document.getElementById("training-programma-detail");
  if (!core || !mount) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const programId = params.get("id");
  const program = core.findProgramById(programId);

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderEmptyState() {
    mount.innerHTML = `
      <section class="simple-hero">
        <p class="eyebrow">Training · Trainingsprogramma's</p>
        <h1>Trainingsprogramma niet gevonden</h1>
        <div class="pillar-summary">
          <p>We konden dit programma niet vinden. Ga terug naar het overzicht en kies opnieuw een route.</p>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="./training-programmas.html">Terug naar overzicht</a>
          <a class="button button-secondary" href="./training.html">Terug naar Training</a>
        </div>
      </section>
    `;
  }

  function getBlockLabel(block) {
    if (block.exerciseId) {
      return `Oefening ${block.exerciseId}`;
    }
    if (block.type === "pickup") {
      return "Ballen rapen en korte feedback";
    }
    if (block.type === "application") {
      return "Toepassingsvorm — transfergame";
    }
    if (block.type === "sessionCard") {
      return "Sessiekaart / afronden";
    }
    if (block.type === "rest") {
      return "Buffer";
    }
    if (block.type === "note") {
      return "Start / doel / eerste preset";
    }
    if (block.transfer) {
      return "Toepassingsvorm — transfergame";
    }
    if (block.log) {
      return "Korte evaluatie";
    }
    return "Onbekend bloktype — controleer JSON";
  }

  function getBlockCopy(block) {
    if (block.type === "exercise" || block.exerciseId) {
      return `
        <strong>${escapeHtml(block.stageLabel ? `${block.stageLabel} · ${getBlockLabel(block)}` : `${getBlockLabel(block)} · ${block.exerciseTitle}`)}</strong>
        <span>${escapeHtml(block.title || block.exerciseTitle)}</span>
        <span>${escapeHtml(block.focus)}</span>
      `;
    }
    if (block.type === "pickup" || block.type === "application" || block.type === "sessionCard" || block.type === "rest" || block.type === "note") {
      return `
        <strong>${escapeHtml(getBlockLabel(block))}</strong>
        <span>${escapeHtml(block.description || "")}</span>
      `;
    }
    if (block.transfer) {
      return `
        <strong>Toepassingsvorm — transfergame</strong>
        <span>${escapeHtml(block.transfer)}</span>
      `;
    }
    if (block.log) {
      return `
        <strong>Korte evaluatie</strong>
        <span>${escapeHtml(block.log)}</span>
      `;
    }
    return `
      <strong>Onbekend bloktype — controleer JSON</strong>
      <span>Dit blok heeft geen oefening, transfer of log in de brondata.</span>
    `;
  }

  function renderExerciseList() {
    return program.coreExercises
      .map((block) => {
        const link = block.link;
        const href = link ? `./${escapeHtml(link.url)}` : "#";
        const linkLabel = link ? `Oefening ${link.exerciseId} · ${link.title}` : `Oefening ${block.exerciseId}`;

        return `
          <article class="program-exercise-card">
            <div class="program-exercise-card-head">
              <span class="module-format">${escapeHtml(block.stageLabel || `Blok ${block.sequenceIndex + 1}`)}</span>
              <span class="meta-pill">5 min slaan</span>
            </div>
            <h3><a class="program-title-link" href="${href}">${escapeHtml(linkLabel)}</a></h3>
            <p>${escapeHtml(block.focus)}</p>
            <div class="meta-row">
              <span class="meta-pill">${escapeHtml(program.handednessLabel)}</span>
              <span class="meta-pill meta-pill-soft">${escapeHtml(program.padelShooterSide)}</span>
              <span class="meta-pill">+ 5 min rapen</span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderOptionalExercises() {
    if (!program.optionalExercises.length) {
      return "";
    }

    return `
      <section class="section-block">
        <div class="section-header-block">
          <div class="section-title-group">
            <span class="section-icon">➕</span>
            <span class="section-title">Optioneel bonusblok / vervangingsoptie</span>
          </div>
        </div>
        <div class="section-body">
          <p class="program-optional-intro">Deze oefeningen horen inhoudelijk bij de route, maar staan niet als verplichte kernblokken in de 60 minuten-planning. Gebruik ze als bonus of vervanging wanneer de sessie sneller loopt.</p>
          <div class="program-exercise-grid">
            ${program.optionalExercises
              .map((block) => {
                const link = block.link;
                const href = link ? `./${escapeHtml(link.url)}` : "#";
                const linkLabel = link ? `Oefening ${link.exerciseId} · ${link.title}` : `Oefening ${block.exerciseId}`;
                return `
                  <article class="program-exercise-card program-exercise-card-optional">
                    <div class="program-exercise-card-head">
                      <span class="module-format">Optioneel</span>
                      <span class="meta-pill">5 min slaan</span>
                    </div>
                    <h3><a class="program-title-link" href="${href}">${escapeHtml(linkLabel)}</a></h3>
                    <p>${escapeHtml(block.focus)}</p>
                  </article>
                `;
              })
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderBlockTimeline() {
    return program.scheduleBlocks
      .map(
        (block) => `
          <li class="program-block-item${block.type === "pickup" ? " program-block-pickup" : ""}${block.type === "application" ? " program-block-transfer" : ""}${block.type === "sessionCard" ? " program-block-log" : ""}${block.type === "rest" ? " program-block-rest" : ""}${block.type === "note" ? " program-block-note" : ""}">
            <div class="program-block-time">${escapeHtml(String(block.minutes))} min</div>
            <div class="program-block-copy">
              ${getBlockCopy(block)}
            </div>
          </li>
        `
      )
      .join("");
  }

  function renderPrintCard() {
    return `
      <div class="session-print-card" id="session-print-card">
        <div class="session-print-card-head">
          <div>
            <p class="eyebrow">Printbare sessiekaart</p>
            <h3>${escapeHtml(program.title)}</h3>
          </div>
          <div class="recipe-badges">
            <span class="meta-pill">${escapeHtml(program.knltbLabel)}</span>
            <span class="meta-pill">${escapeHtml(program.durationLabel)}</span>
            <span class="meta-pill">${escapeHtml(program.handednessLabel)}</span>
            <span class="meta-pill">${escapeHtml(`${program.coreExerciseCount} kern-oefeningen`)}</span>
          </div>
        </div>
        <div class="session-print-grid">
          <div class="content-box">
            <h4>Doel</h4>
            <p>${escapeHtml(program.goal)}</p>
          </div>
          <div class="content-box">
            <h4>Spelerprofiel</h4>
            <p>${escapeHtml(program.profileSummary)}</p>
          </div>
          <div class="content-box">
            <h4>Raaptijd</h4>
            <p>${escapeHtml(`Ja, circa ${program.totalPickupMinutes} minuten totaal verwerkt in de planning.`)}</p>
          </div>
          <div class="content-box">
            <h4>Hoofdprincipe schotselectie</h4>
            <p>${escapeHtml(program.themeContent.mainPrinciple)}</p>
          </div>
          <div class="content-box">
            <h4>Succescriterium / KPI</h4>
            <p>${escapeHtml(program.successCriterionKpi)}</p>
          </div>
        </div>
        <div class="content-box session-print-timeline">
          <h4>Tijdschema</h4>
          <ul class="program-block-list">${renderBlockTimeline()}</ul>
        </div>
        <div class="session-print-grid">
          <div class="content-box">
            <h4>Toepassingsvorm — transfergame</h4>
            <p>${escapeHtml(program.transferBlock ? program.transferBlock.transfer : program.transferGame)}</p>
          </div>
          <div class="content-box">
            <h4>Korte evaluatie</h4>
            <p>${escapeHtml(program.logBlock ? program.logBlock.log : "")}</p>
            <ul class="program-question-list">
              ${program.themeContent.evaluationQuestions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="session-print-grid session-print-fields">
          <div class="content-box">
            <h4>Aantal oefeningen gedaan</h4>
            <p>................................................</p>
          </div>
          <div class="content-box">
            <h4>Raaptijd realistisch?</h4>
            <p>Ja / Nee</p>
          </div>
          <div class="content-box">
            <h4>Welke oefening kostte te veel tijd?</h4>
            <p>................................................</p>
          </div>
          <div class="content-box">
            <h4>Volgende keer inkorten bij</h4>
            <p>................................................</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderProgram() {
    document.title = `${program.id} · ${program.title} | Padel Studio`;

    mount.innerHTML = `
      <section class="simple-hero training-program-hero">
        <p class="eyebrow">Training · Trainingsprogramma's · ${escapeHtml(program.id)}</p>
        <h1>${escapeHtml(program.title)}</h1>
        <div class="pillar-summary">
          <p>${escapeHtml(program.logicalFlow)}</p>
        </div>
        <div class="recipe-badges">
          <span class="meta-pill">${escapeHtml(program.knltbLabel)}</span>
          <span class="meta-pill">${escapeHtml(program.durationLabel)}</span>
          <span class="meta-pill">${escapeHtml(program.handednessLabel)}</span>
          <span class="meta-pill">${escapeHtml(program.playSideLabel)}</span>
          <span class="meta-pill meta-pill-soft">${escapeHtml(program.themeLabel)}</span>
        </div>
        <div class="quick-stats quick-stats-compact">
          ${program.quickFacts
            .map(
              (item) => `
                <span class="stat">
                  <strong>${escapeHtml(item.label)}:</strong>
                  <span>${escapeHtml(item.value)}</span>
                </span>
              `
            )
            .join("")}
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="./training-programmas.html">Terug naar overzicht</a>
          <button class="button button-secondary" id="print-program-button" type="button">Print sessiekaart</button>
        </div>
      </section>

      <article class="detail-recipe training-program-detail-page">
        <section class="recipe-layout training-program-summary-grid">
          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Doel</h3>
                <span class="module-format">${escapeHtml(program.id)}</span>
              </div>
              <div class="content-box">
                <p>${escapeHtml(program.goal)}</p>
              </div>
            </div>
          </section>

          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Spelsituatie</h3>
                <span class="module-format">${escapeHtml(program.themeLabel)}</span>
              </div>
              <div class="content-box">
                <p>${escapeHtml(program.themeContent.situation)}</p>
              </div>
            </div>
          </section>

          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Waarom deze training?</h3>
                <span class="module-format">${escapeHtml(program.durationLabel)}</span>
              </div>
              <div class="content-box">
                <p>${escapeHtml(program.themeContent.why)}</p>
              </div>
            </div>
          </section>
        </section>

        <section class="section-block">
          <div class="section-header-block">
            <div class="section-title-group">
              <span class="section-icon">🎯</span>
              <span class="section-title">Schotselectie-logica</span>
            </div>
          </div>
          <div class="section-body">
            <div class="program-detail-grid">
              <div class="content-box">
                <h4>Spelerprofiel</h4>
                <p>${escapeHtml(program.profileSummary)}</p>
              </div>
              <div class="content-box">
                <h4>Speelzijde</h4>
                <p>${escapeHtml(program.playSideLabel)}</p>
              </div>
              <div class="content-box">
                <h4>Hoofdprincipe</h4>
                <p>${escapeHtml(program.themeContent.mainPrinciple)}</p>
              </div>
              <div class="content-box">
                <h4>Wat je hier traint</h4>
                <p>${escapeHtml(program.themeContent.shotSelection)}</p>
              </div>
              <div class="content-box">
                <h4>PadelShooter-zijde</h4>
                <p>${escapeHtml(program.padelShooterSide)}</p>
                <p class="program-note">Belangrijk: deze trainingsroute is geen app-programma op zich. De PadelShooter-context hoort per oefenblok.</p>
              </div>
              <div class="content-box">
                <h4>Raaptijd verwerkt</h4>
                <p>${escapeHtml(`Ja. Per machine-oefening rekenen we circa 5 minuten ballen rapen mee, naast slaan, wisselen en korte feedback.`)}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-block">
          <div class="section-header-block">
            <div class="section-title-group">
              <span class="section-icon">🧱</span>
              <span class="section-title">Programma-opbouw</span>
            </div>
          </div>
          <div class="section-body">
            <ul class="program-block-list">${renderBlockTimeline()}</ul>
          </div>
        </section>

        <section class="section-block">
          <div class="section-header-block">
            <div class="section-title-group">
              <span class="section-icon">🎾</span>
              <span class="section-title">Oefeningen binnen dit programma</span>
            </div>
          </div>
          <div class="section-body">
            <div class="program-exercise-grid">${renderExerciseList()}</div>
          </div>
        </section>

        ${renderOptionalExercises()}

        <section class="section-block">
          <div class="section-header-block">
            <div class="section-title-group">
              <span class="section-icon">🔁</span>
              <span class="section-title">Toepassingsvorm — transfergame</span>
            </div>
          </div>
          <div class="section-body">
            <div class="program-detail-grid">
              <div class="content-box">
                <h4>Spelstart</h4>
                <p>${escapeHtml(program.themeContent.transferStart)}</p>
              </div>
              <div class="content-box">
                <h4>Regel</h4>
                <p>${escapeHtml(program.themeContent.transferRule)}</p>
              </div>
              <div class="content-box">
                <h4>Praktische vorm</h4>
                <p>${escapeHtml(program.transferBlock ? program.transferBlock.transfer : program.transferGame)}</p>
              </div>
              <div class="content-box">
                <h4>Wanneer telt het goed?</h4>
                <p>${escapeHtml(program.themeContent.transferExtra)}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="recipe-layout training-program-summary-grid">
          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Mentale focus</h3>
                <span class="module-format">Focus</span>
              </div>
              <div class="content-box">
                <p>${escapeHtml(program.themeContent.mentalFocus)}</p>
              </div>
            </div>
          </section>

          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Scorebordregel</h3>
                <span class="module-format">Wedstrijd</span>
              </div>
              <div class="content-box">
                <p>${escapeHtml(program.themeContent.scoreboardRule)}</p>
              </div>
            </div>
          </section>

          <section class="recipe-card">
            <div class="card-header-band"></div>
            <div class="recipe-card-body">
              <div class="section-header-inline">
                <h3>Succescriterium / KPI</h3>
                <span class="module-format">KPI</span>
              </div>
              <div class="content-box">
                <p>${escapeHtml(program.successCriterionKpi)}</p>
              </div>
            </div>
          </section>
        </section>

        <section class="section-block">
          <div class="section-header-block">
            <div class="section-title-group">
              <span class="section-icon">📝</span>
              <span class="section-title">Korte evaluatie</span>
            </div>
          </div>
          <div class="section-body">
            <div class="program-detail-grid">
              <div class="content-box">
                <h4>Coachlog</h4>
                <p>${escapeHtml(program.logBlock ? program.logBlock.log : "")}</p>
              </div>
              <div class="content-box">
                <h4>Evaluatievragen</h4>
                <ul class="program-question-list">
                  ${program.themeContent.evaluationQuestions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
                </ul>
              </div>
              <div class="content-box">
                <h4>Niet vergeten</h4>
                <p>${escapeHtml(program.themeContent.transferBad)}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section-block training-program-print-section">
          <div class="section-header-block">
            <div class="section-title-group">
              <span class="section-icon">🖨️</span>
              <span class="section-title">Printbare sessiekaart</span>
            </div>
          </div>
          <div class="section-body">
            ${renderPrintCard()}
          </div>
        </section>
      </article>
    `;

    const printButton = document.getElementById("print-program-button");
    if (printButton) {
      printButton.addEventListener("click", () => {
        window.print();
      });
    }
  }

  if (!program) {
    renderEmptyState();
    return;
  }

  renderProgram();
})();
