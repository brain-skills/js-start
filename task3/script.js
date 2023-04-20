const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');

function makeGreen() {
    green.style.background = ('green');
    yellow.style.background=('black');
    red.style.background=('black');
    green.removeEventListener('click', makeGreen);
    yellow.addEventListener('click', makeYellow);
    red.addEventListener('click', makeRed);
}
green.addEventListener('click', makeGreen);

function makeYellow(){
    green.style.background = ('black');
    yellow.style.background=('yellow');
    red.style.background=('black');
    yellow.removeEventListener('click', makeYellow);
    red.addEventListener('click', makeRed);
    green.addEventListener('click', makeGreen);
}
yellow.addEventListener('click', makeYellow);

function makeRed(){
    green.style.background = ('black');
    yellow.style.background=('black');
    red.style.background=('red');
    red.removeEventListener('click', makeRed);
    green.addEventListener('click', makeGreen);
    yellow.addEventListener('click', makeYellow);
}
red.addEventListener('click', makeRed);