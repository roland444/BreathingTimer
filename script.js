// breathing 100 sec
// breath holding 15 sec

const _startBtn = document.querySelector("#start-btn");
const _timer = document.querySelector(".timer");

let breathingSeconds;
let holdingSeconds;

const startBreathingTimer = () => {
    let sessions = document.getElementById("sessions").value;
    let seconds = document.getElementById("seconds").value;
    
    breathingSeconds = parseInt(seconds) + 1;
    holdingSeconds = 16;

    _startBtn.disabled = true;
 
    const timer = setInterval(() => {
        breathingSeconds--;
        _timer.innerHTML = `${breathingSeconds}`;

        if (breathingSeconds === 0) {
            clearInterval(timer);
            
            const holdingTimer = setInterval(() => {
                holdingSeconds--;
                _timer.innerHTML = `${holdingSeconds}`;
                
                if (holdingSeconds === 0) {
                    clearInterval(holdingTimer);
                    _startBtn.disabled = false;
                }
            }, 1000)
        }
    }, 1000);
}

_startBtn.addEventListener("click", startBreathingTimer);