const form = document.querySelector(".form");
const formFieldInputs = document.querySelectorAll(".field-control");
const startButton = document.querySelectorAll(".button_start");
const startError = document.querySelector(".start_error");
const game = document.querySelector(".game");

function getFieldValue() {
  for (const formFieldInput of formFieldInputs) {
    if (formFieldInput.checked) {
      difficulty = formFieldInput.value;
      window.application = { currentDifficulty: difficulty };
      console.log(application.currentDifficulty);
      form.classList.add("hidden");
      game.classList.remove("hidden");
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
});
