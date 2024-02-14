// breathing 100 sec
// breath holding 15 sec

const _startBtn = document.querySelector("#start-btn");
const _timer = document.querySelector(".timer");

let breathingSeconds = 0;
let breathHoldSeconds = 0;
let interval;
let startTimer = 0;
let elapsedTime = 0;

const start = () => {
    if (!interval) {
        startTimer = Date.now() - elapsedTime;
        interval = setInterval(update, 1000);
    }
}

const update = () => {
    elapsedTime = Date.now() - startTimer;

    breathingSeconds = Math.floor((elapsedTime / 1000));

    _timer.innerHTML = `${countDownBreathing(breathingSeconds)}`;
}

const countDownBreathing = (num) => {
    return (100 - num);
}

const countDownHolding = (num) => {
    return (15 - num);
}

_startBtn.addEventListener("click", start);