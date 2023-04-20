const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
const wrapper = document.querySelector('#wrapper');

function makeGreen() {
    green.style.background = ('green');
    red.style.background=('black');
    wrapper.addEventListener('click', makeYellow);
    wrapper.removeEventListener('click', makeRed);
}
wrapper.addEventListener('click', makeGreen);

function makeYellow(){
    yellow.style.background = ('yellow');
    green.style.background=('black');
    wrapper.addEventListener('click', makeRed);
    wrapper.removeEventListener('click', makeGreen);
}

function makeRed(){
    red.style.background = ('red');
    yellow.style.background=('black');
    wrapper.addEventListener('click', makeGreen);
    wrapper.removeEventListener('click', makeYellow);
}