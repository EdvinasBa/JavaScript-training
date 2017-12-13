const hourHand = document.querySelector('.clock__hand--hours');
const minHand  = document.querySelector('.clock__hand--minutes');
const secHand  = document.querySelector('.clock__hand--seconds');

function setDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = ((hours/60) * 360) + 90;
    if (hours === 0 || hours === 1) {
        hourHand.classList.toggle('no-transition');
    }
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    const minDeg = ((minutes/60) * 360) + 90;
    if (minutes === 0 || minutes === 1) {
        minHand.classList.toggle('no-transition');
    }
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const secDeg = ((seconds/60) * 360) + 90;
    if (seconds === 0 || seconds === 1) {
        secHand.classList.toggle('no-transition');
    }
    secHand.style.transform = `rotate(${secDeg}deg)`;

}
setInterval(setDate, 1000);