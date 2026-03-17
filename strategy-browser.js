const STRATEGY_TOPICS = Array.isArray(window.STRATEGY_TOPICS) ? window.STRATEGY_TOPICS : [];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function getTopic() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("topic");
  return STRATEGY_TOPICS.find((topic) => topic.slug === slug) || STRATEGY_TOPICS[0];
}

function getSubtopic(topic) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("sub");
  return (topic?.subtopics || []).find((item) => item.slug === slug) || topic?.subtopics?.[0];
}

function stateCards(states) {
  return [
    { label: "Groen", className: "ball-green", text: states.green },
    { label: "Oranje", className: "ball-orange", text: states.orange },
    { label: "Rood", className: "ball-red", text: states.red }
  ]
    .map(
      (item) => `
        <article class="strategy-state-card">
          <span class="ball-state-pill ${item.className}">${item.label}</span>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function overviewCard(topic) {
  return `
    <a class="strategy-route-card" href="./strategy-topic.html?topic=${encodeURIComponent(topic.slug)}">
      <div class="strategy-route-media" style="background-image:linear-gradient(180deg, rgba(11, 22, 28, 0.08), rgba(11, 22, 28, 0.62)), url('${topic.image}');"></div>
      <div class="strategy-route-body">
        <span class="topic-meta">${escapeHtml(topic.eyebrow)}</span>
        <h3>${escapeHtml(topic.title)}</h3>
        <p>${escapeHtml(topic.summary)}</p>
        <div class="strategy-route-tags">
          <span class="ball-state-pill ball-green">Groen</span>
          <span class="ball-state-pill ball-orange">Oranje</span>
          <span class="ball-state-pill ball-red">Rood</span>
        </div>
      </div>
    </a>
  `;
}

function renderOverview() {
  const root = document.querySelector("#strategy-overview-grid");
  if (!root) {
    return;
  }

  root.innerHTML = STRATEGY_TOPICS.map(overviewCard).join("");
}

function renderTopicPage() {
  const hero = document.querySelector("#strategy-topic-hero");
  if (!hero) {
    return;
  }

  const topic = getTopic();
  document.title = `${topic.title} | padelislife`;
  hero.style.backgroundImage = `linear-gradient(180deg, rgba(9, 17, 22, 0.18), rgba(9, 17, 22, 0.74)), url('${topic.image}')`;
  setText("#strategy-topic-eyebrow", topic.eyebrow);
  setText("#strategy-topic-title", topic.title);
  setText("#strategy-topic-summary", topic.lead);

  const states = document.querySelector("#strategy-topic-states");
  if (states) {
    states.innerHTML = stateCards(topic.ballStates);
  }

  const subtopics = document.querySelector("#strategy-topic-subtopics");
  if (subtopics) {
    subtopics.innerHTML = topic.subtopics
      .map(
        (item) => `
          <a class="strategy-route-card strategy-route-card-compact" href="./strategy-subtopic.html?topic=${encodeURIComponent(topic.slug)}&sub=${encodeURIComponent(item.slug)}">
            <div class="strategy-route-body">
              <span class="topic-meta">Substrategie</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.summary)}</p>
            </div>
          </a>
        `
      )
      .join("");
  }

  const strokes = document.querySelector("#strategy-topic-strokes");
  if (strokes) {
    strokes.innerHTML = topic.strokes
      .map(
        (stroke) => `
          <article class="module-card module-card-compact">
            <div class="module-card-header">
              <span class="topic-meta">Slag</span>
            </div>
            <h3>${escapeHtml(stroke.name)}</h3>
            <p>${escapeHtml(stroke.strategy)}</p>
          </article>
        `
      )
      .join("");
  }

  const situations = document.querySelector("#strategy-topic-situations");
  if (situations) {
    situations.innerHTML = topic.situations
      .map(
        (item) => `
          <article class="topic-card">
            <div class="topic-meta">Situatie</div>
            <h3>${escapeHtml(item)}</h3>
          </article>
        `
      )
      .join("");
  }
}

function renderSubtopicPage() {
  const hero = document.querySelector("#strategy-subtopic-hero");
  if (!hero) {
    return;
  }

  const topic = getTopic();
  const subtopic = getSubtopic(topic);
  document.title = `${subtopic.title} | ${topic.title} | padelislife`;
  hero.style.backgroundImage = `linear-gradient(180deg, rgba(9, 17, 22, 0.18), rgba(9, 17, 22, 0.74)), url('${topic.image}')`;
  setText("#strategy-subtopic-eyebrow", `${topic.title} · Substrategie`);
  setText("#strategy-subtopic-title", subtopic.title);
  setText("#strategy-subtopic-summary", subtopic.summary);

  const explanation = document.querySelector("#strategy-subtopic-explanation");
  if (explanation) {
    explanation.innerHTML = `<h3>${escapeHtml(subtopic.title)}</h3><p>${escapeHtml(subtopic.explanation)}</p>`;
  }

  const states = document.querySelector("#strategy-subtopic-states");
  if (states) {
    states.innerHTML = stateCards(subtopic.ballStates);
  }

  const strokes = document.querySelector("#strategy-subtopic-strokes");
  if (strokes) {
    strokes.innerHTML = subtopic.strokes
      .map(
        (stroke) => `
          <article class="module-card module-card-compact">
            <div class="module-card-header">
              <span class="topic-meta">Relevant</span>
            </div>
            <h3>${escapeHtml(stroke)}</h3>
            <p>Deze slag hoort hier tactisch bij omdat hij helpt om dit patroon uitvoerbaar te maken.</p>
          </article>
        `
      )
      .join("");
  }

  const situations = document.querySelector("#strategy-subtopic-situations");
  if (situations) {
    situations.innerHTML = subtopic.situations
      .map(
        (item) => `
          <article class="topic-card">
            <div class="topic-meta">Rallymoment</div>
            <h3>${escapeHtml(item)}</h3>
          </article>
        `
      )
      .join("");
  }
}

renderOverview();
renderTopicPage();
renderSubtopicPage();
