const holes = document.getElementsByClassName('hole');
const score = document.getElementsByClassName('score');
const moles = document.getElementsByClassName('mole');
let lastHole;

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