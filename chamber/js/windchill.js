let wDeg = parseInt(document.querySelector('#weather-degrees span').textContent);
let wSpeed = parseInt(document.querySelector('#wind-speed span').textContent);
let wChill = document.querySelector("#wind-chill span");

if (wDeg <= 50 && wSpeed >= 3) {
    let chill = 35.74 + 0.6215*wDeg - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * wDeg * Math.pow(wSpeed, 0.16)
    wChill.textContent = `${Math.floor(chill)}`;
};