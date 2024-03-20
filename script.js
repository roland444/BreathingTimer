const body = document.querySelector("body");
const main = document.querySelector(".main");

// === Sessions section DOOM Elemetns ===

const addButton = document.querySelector(".add-session");
const rmvButton = document.querySelector(".remove-session");
const sessionsAmount = document.querySelector("#session-value");

// === Time section DOOM Elements ===

const timeInput = document.querySelector("#time-input");
const timeShow = document.querySelector(".time-value");

// === Start section DOOM Elemets ===

const startBtn = document.querySelector(".start");

// === window.onload ===

window.onload = () => {
    sessionsAmount.innerHTML = 3;
    timeShow.innerHTML = 100;
    timeInput.value = 100;

}

// ============= Sessions sectionn =============

addButton.addEventListener("click", addSession);

rmvButton.addEventListener("click", rmvSession);


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

// ============= Start section =============

startBtn.addEventListener("click", initBreathingTimer)

function initBreathingTimer() {
    let amountOfSessions = sessionsAmount.innerText;
    let amountOfSeconds = timeInput.value;
    let holding = 15;
    let amountOfHolding = holding;
    

    [amountOfSessions, amountOfSeconds] = [parseInt(amountOfSessions), parseInt(amountOfSeconds)];

    main.classList.add("disable");

    setTimeout(() => {
        body.innerHTML = `
            <div class="breathing-background">
                <div class="timer">
                    <span class="time-left"></span>
                </div>
            </div>
        `;

        function startTimer() {
            const background = document.querySelector(".breathing-background");
            const timeLeft = document.querySelector(".time-left");
            
            

            const timer = setInterval(() => {
                timeLeft.innerHTML = `${amountOfSeconds}`;
                amountOfSeconds--;
            
                if (amountOfSeconds < -1) {
                    timeLeft.innerHTML = `${amountOfHolding}`;
                    amountOfHolding--;
                            
                    if (amountOfHolding < 0) {
                        [amountOfSeconds, amountOfHolding] = [parseInt(timeInput.value), holding]
                        amountOfSessions--;
                            
                        if (amountOfSessions === 0) {
                            clearInterval(timer);
                            
                            background.classList.add("disable");
                            
                            body.innerHTML = `
                                <div class="ending-container">
                                    <p>Congratulations!</p>
                                    <span>You achived all ${(sessionsAmount.innerText == 1) ? sessionsAmount.innerText + " session" : sessionsAmount.innerText + " sessions"}</span>
                                    <button id="menu-btn">Menu</button>
                                </div>
                            `;
                            
                            const endingDiv = document.querySelector(".ending-container");
                            const menuBtn = document.querySelector("#menu-btn");

                            
                            menuBtn.addEventListener("click", () => {
                                endingDiv.remove();
                                main.classList.remove("disable");
                                body.appendChild(main);
                            });
                            
                            
                            
                        }       
                    }
                }
            }, 1000)  
        }
        startTimer();
    }, 1500)
}













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