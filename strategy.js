const state = {
  selected: null
};

const explanations = {
  A: {
    correct: true,
    text: "Correct. Als je partner diep in de defense wordt gedwongen, houd jij het midden en de overgangsruimte compact. Zo bescherm je de korte bal en voorkom je dat jullie allebei te diep worden."
  },
  B: {
    correct: false,
    text: "Te passief. Als jullie allebei terugzakken, geef je te veel baan prijs en laat je het midden open voor de volgende drukbal."
  },
  C: {
    correct: false,
    text: "Te diep. Deze positie maakt de afstand tot het net en het midden te groot, waardoor je partner geen steun meer heeft in de overgangszone."
  }
};

const buttons = [...document.querySelectorAll(".choice-button")];
const confirmButton = document.querySelector("#confirm-strategy");
const feedback = document.querySelector("#strategy-feedback");
const zones = [...document.querySelectorAll(".court-zone")];

function setSelected(choice) {
  state.selected = choice;

  buttons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.choice === choice);
  });

  zones.forEach((zone) => {
    zone.classList.toggle("is-selected", zone.dataset.choice === choice);
  });

  feedback.textContent = "Antwoord geselecteerd. Klik op controleer antwoord.";
  feedback.className = "strategy-feedback";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setSelected(button.dataset.choice));
});

confirmButton?.addEventListener("click", () => {
  if (!state.selected) {
    feedback.textContent = "Kies eerst A, B of C.";
    feedback.className = "strategy-feedback";
    return;
  }

  const result = explanations[state.selected];
  feedback.textContent = result.text;
  feedback.className = `strategy-feedback ${result.correct ? "is-correct" : "is-wrong"}`;
});
