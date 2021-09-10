import './style.scss';
import 'regenerator-runtime';

// Array with cards


// END OF: Array with cards
// Shuffle logic


// END OF: Shuffle logic
// Click and flip functionality


// END OF: Click and flip functionality
// Timer Logic
let flippedPairs = 0;

const root = document.getElementById('root');
const timer = document.createElement("div");
timer.setAttribute("id", "timer");
root.appendChild(timer);
let deciseconds = 0;
let seconds = 0;
let minutes = 0;
const runTimer = setInterval(() => {
    deciseconds++;
    if (deciseconds === 10) {
        seconds++;
        deciseconds = 0;
    } if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    timer.innerText = `${minutes}:${(seconds >= 10) ? '' : 0}${seconds}${deciseconds}`

}, 100)

// For testing the timer will stop onclick
timer.addEventListener("click", () => {
    flippedPairs = 8;
    // Stop the timer:
    if (flippedPairs === 8) {
        clearInterval(runTimer);
    }
})

// END OF: Timer Logic
// Score manager


// END OF: Score manager