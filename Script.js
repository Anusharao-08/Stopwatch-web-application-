let hours = 0;
let minutes = 0;
let seconds = 0;
let lapCount = 0;
let timerInterval;
let isRunning = false;

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const lapList = document.getElementById('lap-list');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

function startTimer() {
    if (!isRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapCount = 0;
    hoursSpan.textContent = '00';
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00';
    lapList.innerHTML = '';
    isRunning = false;
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    hoursSpan.textContent = padZero(hours);
    minutesSpan.textContent = padZero(minutes);
    secondsSpan.textContent = padZero(seconds);
}

function recordLap() {
    const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    const lapListItem = document.createElement('LI');
    lapListItem.textContent = `Lap ${lapCount + 1}: ${lapTime}`;
    lapList.appendChild(lapListItem);
    lapCount++;
}

function padZero(time) {
    return (time < 10 ? '0' : '') + time;
}
