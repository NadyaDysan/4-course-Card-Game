const form = document.querySelector('.form');
        const formFieldInputs = form.querySelectorAll('.field-control');
        const startButton = form.querySelectorAll('.button_start');
        const startError = form.querySelector('.start_error');

        function getFieldValue() {
            for (const formFieldInput of formFieldInputs) {
                if (formFieldInput.checked) {
                    difficulty = formFieldInput.value;
                    localStorage.setItem('difficulty', difficulty);
                    console.log(difficulty);
                    location.href = 'playing_field.html';
                } else if (!formFieldInputs[0].checked && !formFieldInputs[1].checked && !formFieldInputs[2].checked) {
                    startError.classList.remove("hidden");
                }
            }
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            getFieldValue();
        });