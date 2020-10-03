const holes = document.getElementsByClassName('hole');
const score = document.getElementsByClassName('score');
const moles = document.getElementsByClassName('mole');
let startButton = document.getElementsByClassName('start');

let lastHole;
let timeUp = false;

startButton.onclick = start();

function start() {
    score.textContent = 0;
    timeUp = false;
    randomizeMole();
    setTimeout(() =>
    timeUp = true, 20000);
}

function randomizeTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomizeHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(hole === lastHole) {
        return randomizeHole(holes);
    }
    lastHole = hole;
    return hole;
}

function randomizeMole() {
    const time = randomizeTime(200, 1000);
    const hole = randomizeHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp){
            randomizeMole();
        }
    }, time);
}