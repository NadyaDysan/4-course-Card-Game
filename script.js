const form = document.querySelector(".form");
const formFieldInputs = document.querySelectorAll(".field-control");
const startButton = document.querySelectorAll(".button_start");
const startError = document.querySelector(".start_error");

const game = document.querySelector(".game");
const cards = document.querySelectorAll(".cards");

function getFieldValue() {
  for (const formFieldInput of formFieldInputs) {
    if (formFieldInput.checked) {
      difficulty = formFieldInput.value;
      localStorage.setItem("difficulty", difficulty);
      console.log(difficulty);
    } else if (
      !formFieldInputs[0].checked &&
      !formFieldInputs[1].checked &&
      !formFieldInputs[2].checked
    ) {
      startError.classList.remove("hidden");
    }
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getFieldValue();
  form.classList.add("hidden");
  game.classList.remove("hidden");

  setTimeout(() => {
    cards.forEach((card) => {
        card.classList.add("cards_cover");
        startTimer();
    });
}, 5000);
  
});
