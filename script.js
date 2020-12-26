const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = '1 jan 2021';

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) %24;
    const minutes = Math.floor(totalSeconds/60) %60;
    const seconds = Math.floor(totalSeconds) %60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}   

// Initial count
countdown();

setInterval(countdown, 1000);