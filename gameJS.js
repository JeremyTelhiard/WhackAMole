"use strict";

const holes = document.getElementsByClassName('hole');
const score = document.getElementsByClassName('score');
const moles = document.getElementsByClassName('mole');

let moleArray = [];
let holeArray = [];
for(let i = 0; i < holes.length; i++){
    holeArray.push(holes[i]);
}
for(let i = 0; i < moles.length; i++){
    moleArray.push(moles[i]);
}
let startButton = document.getElementById('start');
let scoreNumber = 0;
let lastHole;
let timeUp = false;

startButton.addEventListener("click", start);

function start() {
    console.log('GOOOOO');
    score.textContent = 0;
    timeUp = false;
    scoreNumber = 0;
    randomizeMole();
    setTimeout(() =>
    timeUp = true, 20000);
}

function randomizeTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
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

function randomizeHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(hole === lastHole) {
        return randomizeHole(holes);
    }
    lastHole = hole;
    return hole;
}

function whack(e) {
    scoreNumber++;
    this.classList.remove('up');
    score.textContent = scoreNumber;
}

moleArray.forEach(mole => mole.addEventListener('click', whack));