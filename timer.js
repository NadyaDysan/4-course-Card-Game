const timerDisplay = document.querySelector('.timer');
let startTime, updatedTime, difference, tInterval, savedTime;
let paused = 0;
let running = 0;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);

        paused = 0;
        running = 1;
    }
}

// function pauseTimer() {
//     if (!difference) {
//     } else if (!paused) {
//         clearInterval(tInterval);
//         savedTime = difference;
//         paused = 1;
//         running = 0;

//         startTimerButton.classList.remove('lighter');
//         pauseTimerButton.classList.add('lighter');
//         startTimerButton.style.cursor = 'pointer';
//         pauseTimerButton.style.cursor = 'auto';
//     } else {
//         startTimer();
//     }
// }

function resetTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 0;
    timerDisplay.innerHTML = '00.00';
}
function getShowTime() {
    updatedTime = new Date().getTime();
    if (savedTime) {
        difference = updatedTime - startTime + savedTime;
    } else {
        difference = updatedTime - startTime;
    }
    let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % (1000 * 60)) / 100);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    milliseconds =
        milliseconds < 100
            ? milliseconds < 10
                ? '00' + milliseconds
                : '0' + milliseconds
            : milliseconds;
    timerDisplay.innerHTML = minutes + ':' + seconds;
}
