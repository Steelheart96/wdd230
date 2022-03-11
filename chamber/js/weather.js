const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1c15ca44d579560748c473e0caa12353&q=Fairbanks&units=imperial'

fetch(apiUrl)
    .then(response => response.json())
    .then(jsObject => {

        const wObject = jsObject.list[0]
        const temperature = wObject.main.temp
        const windSpeed = wObject.wind.speed
        const iconUrl = `https://openweathermap.org/img/w/${wObject.weather[0].icon}.png`
        const description = capitalize(wObject.weather[0].description)
        
        let curTemp = document.getElementById('weather-degrees')
        let weatherImg = document.getElementById('weather-image')
        let wdescript = document.getElementById('weather-description')

        curTemp.textContent = temperature
        weatherImg.src = iconUrl
        weatherImg.alt = description
        wdescript.textContent = description

        let wChill = document.querySelector("#wind-chill span");

        if (temperature <= 50 && windSpeed >= 3) {
            
            wChill.textContent = `${Math.floor(windChill(temperature, windSpeed))}`;
        }
        else {
            wChill.textContent = 'N/A'
        }

    })

function capitalize(string) {
    return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

function windChill(wDeg, wSpeed){
    return 35.74 + 0.6215*wDeg - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * wDeg * Math.pow(wSpeed, 0.16)
}