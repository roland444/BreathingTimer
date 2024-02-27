//const _inputs = document.querySelectorAll("input");
const _startBtn = document.querySelector("#start-btn");
const _timer = document.querySelector(".timer");

let sessions = document.querySelector("#sessions").value;
let seconds = document.querySelector("#seconds").value;
sessions = parseInt(sessions);
seconds = parseInt(seconds);

let holding = 15;

function initBreathingTimer() {
    let amountOfSessions = sessions;
    let amountOfSeconds = seconds;
    let amountOfHolding = holding;

    function startTimer() {
        const timer = setInterval(() => {
            _timer.innerHTML = `${amountOfSeconds}`;
            
            amountOfSeconds--;

            if (amountOfSeconds < -1) {
                _timer.innerHTML = `${amountOfHolding}`;

                amountOfHolding--;
                
                if (amountOfHolding < 0) {
                    amountOfSeconds = seconds;
                    amountOfHolding = holding;
                    
                    amountOfSessions--;
                
                    if (amountOfSessions === 0) {
                        clearInterval(timer);
                    }       
                }
            }
        }, 1000)  
    }

    startTimer();
}

_startBtn.addEventListener("click", initBreathingTimer);