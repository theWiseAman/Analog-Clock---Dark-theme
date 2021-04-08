setInterval(() => {
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    hhAngle = 30 * hours + minutes / 2 + seconds / 120;
    mhAngle = 6 * minutes + seconds / 10;
    shAngle = 6 * seconds;

    hourHand.style.transform = `rotate(${hhAngle}deg)`;
    minuteHand.style.transform = `rotate(${mhAngle}deg)`;
    secondHand.style.transform = `rotate(${shAngle}deg)`;
}, 1000);