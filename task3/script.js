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












































































































// function makeGreen() {
//     if (green.style.background == ('black')){
//         green.style.background = ('green');
//         yellow.style.background = ('black');
//         red.style.background = ('black');
//         green.removeEventListener('click', makeGreen);
//         yellow.addEventListener('click', makeYellow);
//         red.addEventListener('click', makeRed);
//     } else {
//         green.style.background = ('black');
//         yellow.style.background = ('yellow');
//         red.style.background = ('black');
//         green.removeEventListener('click', makeGreen);
//         yellow.addEventListener('click', makeYellow);
//         red.addEventListener('click', makeRed);
//     }
// }
// green.addEventListener('click', makeGreen);

// function makeYellow(){
//     if (yellow.style.background === ('yellow')){
//         green.style.background = ('black');
//         yellow.style.background = ('yellow');
//         red.style.background = ('black');
//         yellow.removeEventListener('click', makeYellow);
//         red.addEventListener('click', makeRed);
//         green.addEventListener('click', makeGreen);
//     } else {
//     }
// }
// yellow.addEventListener('click', makeYellow);

// function makeRed(){
//     if (red.style.background === ('red')){
//         green.style.background = ('black');
//         yellow.style.background = ('black');
//         red.style.background = ('red');
//         red.removeEventListener('click', makeRed);
//         green.addEventListener('click', makeGreen);
//         yellow.addEventListener('click', makeYellow);
//     } else {
//     }
// }
// red.addEventListener('click', makeRed);















































































// function makeGreen() {
//     green.style.background = ('green');
//     yellow.style.background = ('black');
//     red.style.background = ('black');
//     green.removeEventListener('click', makeGreen);
//     yellow.addEventListener('click', makeYellow);
//     red.addEventListener('click', makeRed);
// }
// green.addEventListener('click', makeGreen);

// function makeYellow(){
//     green.style.background = ('black');
//     yellow.style.background = ('yellow');
//     red.style.background = ('black');
//     yellow.removeEventListener('click', makeYellow);
//     red.addEventListener('click', makeRed);
//     green.addEventListener('click', makeGreen);
// }
// yellow.addEventListener('click', makeYellow);

// function makeRed(){
//     green.style.background = ('black');
//     yellow.style.background = ('black');
//     red.style.background = ('red');
//     red.removeEventListener('click', makeRed);
//     green.addEventListener('click', makeGreen);
//     yellow.addEventListener('click', makeYellow);
// }
// red.addEventListener('click', makeRed);

// if (){
// } else {
// }

// function trafficLight (){
// }
// traffic.addEventListener('click', trafficLight);