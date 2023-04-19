// ===========================================================================================
// Ручной вариант:
// ===========================================================================================

const manualGreen = document.querySelector('#manualGreen');
const manualYellow = document.querySelector('#manualYellow');
const manualRed = document.querySelector('#manualRed');

function mBgGreen() {
    manualGreen.style.background = ('green');
    manualYellow.style.background=('black');
    manualRed.style.background=('black');
    manualGreen.removeEventListener('click', mBgGreen);
    manualYellow.addEventListener('click', mBgYellow);
    manualRed.addEventListener('click', mBgRed);
}
manualGreen.addEventListener('click', mBgGreen);

function mBgYellow(){
    manualGreen.style.background = ('black');
    manualYellow.style.background=('yellow');
    manualRed.style.background=('black');
    manualYellow.removeEventListener('click', mBgYellow);
    manualRed.addEventListener('click', mBgRed);
    manualGreen.addEventListener('click', mBgGreen);
}
manualYellow.addEventListener('click', mBgYellow);

function mBgRed(){
    manualGreen.style.background = ('black');
    manualYellow.style.background=('black');
    manualRed.style.background=('red');
    manualRed.removeEventListener('click', mBgRed);
    manualGreen.addEventListener('click', mBgGreen);
    manualYellow.addEventListener('click', mBgYellow);
}
manualRed.addEventListener('click', mBgRed);

// ===========================================================================================
// Автоматический вариант:
// ===========================================================================================

var autoTraffic = document.querySelectorAll('.autoTraffic > div'), 
	timers = [1000, 1000, 1000], counter = 0;

document.addEventListener('load', start);

var start = setTimeout(function() {
    traffic();
}, 100);

function traffic() {
	for (var i=0; i < autoTraffic.length; i++) {
		autoTraffic[i].classList.remove('on');
	}
	autoTraffic[counter].classList.add('on');
	setTimeout(traffic, timers[counter]);
	counter = (counter + 1) % timers.length;
}