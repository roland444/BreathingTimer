// === Sessions section DOOM Elemetns ===

const addButton = document.querySelector(".add-session");
const rmvButton = document.querySelector(".remove-session");
const sessionsAmount = document.querySelector("#session-value");

// === Time section DOOM Elements ===

const timeInput = document.querySelector("#input-time");
const timeShow = document.querySelector(".time-value");

// === window.onload ===

window.onload = () => {
    sessionsAmount.innerHTML = 3;
    timeShow.innerHTML = 100;
    timeInput.value = 100;

}

// ============= Sessions sectionn =============

function addSession() {
    if (sessionsAmount.innerHTML === "10") {
        addButton.diabled = true;

        rmvButton.disabled = false;
    } else {
        sessionsAmount.innerHTML++;
    }
}

function rmvSession() {
    if (sessionsAmount.innerHTML === "1") {
        rmvButton.disabled = true;

        addButton.disabled = false;
    } else {
        sessionsAmount.innerHTML--;
    }
    
}

// ============= Time section =============

timeInput.addEventListener("input", () => {
    timeShow.innerHTML = timeInput.value;
})

// === Event Listeners ===

addButton.addEventListener("click", addSession);

rmvButton.addEventListener("click", rmvSession);




































//[sessions, seconds] = [parseInt(sessions), parseInt(seconds)];

// let holding = 15;

// function initBreathingTimer() {
//     let amountOfSessions = sessions;
//     let amountOfSeconds = seconds;
//     let amountOfHolding = holding;

//     function startTimer() {
//         const timer = setInterval(() => {
//             _timer.innerHTML = `${amountOfSeconds}`;
//             amountOfSeconds--;

//             if (amountOfSeconds < -1) {
//                 _timer.innerHTML = `${amountOfHolding}`;
//                 amountOfHolding--;
                
//                 if (amountOfHolding < 0) {
//                     [amountOfSeconds, amountOfHolding] = [seconds, holding]
//                     amountOfSessions--;
                
//                     if (amountOfSessions === 0) {
//                         clearInterval(timer);
//                     }       
//                 }
//             }
//         }, 1000)  
//     }
//     startTimer();
// }

//_startBtn.addEventListener("click", initBreathingTimer);