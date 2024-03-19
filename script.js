//const _inputs = document.querySelectorAll("input");
// const _startBtn = document.querySelector("#start-btn");
// const _timer = document.querySelector(".timer");

// let sessions = document.querySelector("#sessions").value;
// let seconds = document.querySelector("#seconds").value;

// sessions settings

const addButton = document.querySelector(".add-session");
const rmvButton = document.querySelector(".remove-session");
const sessionsAmount = document.querySelector("#session-value");


window.onload = () => {
    sessionsAmount.innerHTML = 3;

}

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



addButton.addEventListener("click", addSession);

rmvButton.addEventListener("click", rmvSession);


//if (sessionsAmount.innerText)


// Event Listeners



//rmvButton.addEventListener("click", rmvSession);



































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