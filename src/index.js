import './style.scss';
import 'regenerator-runtime';

// Array with card images
const sortedImages = [
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairOne.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairOne.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairTwo.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairTwo.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairThree.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairThree.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairFour.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairFour.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairFive.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairFive.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairSix.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairSix.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairSeven.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairSeven.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairEight.jpg",
    "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/pairEight.jpg",
]

// END OF: Array with card images
// Shuffle logic

function shuffle(images) {
    let currentIndex = images.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [images[currentIndex], images[randomIndex]] = [
        images[randomIndex], images[currentIndex]];
    }
  
    return images;
}

const images = shuffle(sortedImages);

// END OF: Shuffle logic
// Click and flip functionality

const backSide = document.querySelectorAll(".flip-card-back>img");

backSide.forEach((element, i) => {
    element.src = images[i];
})

const cards = document.querySelectorAll(".flip-card");

cards.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.length === 1 ) {
            element.classList.add("flipped");
        } else {
            element.classList.remove("flipped");
        }
    })
});

const cardOne = document.getElementById("card-one");
const cardTwo = document.getElementById("card-two");
/* 
addEventListener() */
// do for every td ????? (if we do table)

// or do grid .. ??
/* 
function checkForMatch(card1, card2) {
    return "brief flip";
        // 1000 milisecond CSS transform
}

function flipMatchedCards(card1, card2) {
    return "cards flip";
    // permanent CSS transform
}

if (cardOne.classList.contains("red-dog") && cardTwo.classList.contains("red-dog")) {
    flipMatchedCards();
} else {
    checkForMatch();
}
 */





// END OF: Click and flip functionality
// Timer Logic
let flippedPairs = 0;

const image = document.createElement('img');
console.log("img:", image);
image.src = "https://raw.githubusercontent.com/FbW-E01/Memory-Game/main/src/img/question.png";

const root = document.getElementById('root');
const timer = document.createElement("div");
timer.setAttribute("id", "timer");
root.appendChild(timer);
//root.appendChild(image);
console.log(image);
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