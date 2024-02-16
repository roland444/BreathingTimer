// breathing 100 sec
// breath holding 15 sec

const _startBtn = document.querySelector("#start-btn");
const _timer = document.querySelector(".timer");

let breathingSeconds;
let holdingSeconds;

const startBreathingTimer = () => {
    breathingSeconds = 6;
    
    const timer = setInterval(function() {
        breathingSeconds--;
        _timer.innerHTML = `${breathingSeconds}`;

        if (breathingSeconds === 0) {
            clearInterval(timer);
            startHoldingTimer();
        }
    }, 1000);
}

const startHoldingTimer = () => {
    holdingSeconds = 6;
    
    const timer = setInterval(function() {
        if (holdingSeconds !== 0) {
            holdingSeconds--;
            _timer.innerHTML = `${holdingSeconds}`;
        } else {
            clearInterval(timer);
        }
    }, 1000)
}

_startBtn.addEventListener("click", startBreathingTimer);