const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1c15ca44d579560748c473e0caa12353&q=Fairbanks&units=imperial'

fetch(apiUrl)
    .then(response => response.json())
    .then(jsObject => {

        const wObject = jsObject.list[0]
        const temperature = wObject.main.temp
        const iconUrl = `https://openweathermap.org/img/w/${wObject.weather[0].icon}.png`
        const description = capitalize(wObject.weather[0].description)
        
        let curTemp = document.getElementById('current-temp')
        let iconSrc = document.getElementById('icon-src')
        let weatherImg = document.getElementById('weathericon')
        let caption = document.querySelector('figure figcaption')

        curTemp.textContent = temperature
        iconSrc.textContent = iconUrl
        weatherImg.src = iconUrl
        weatherImg.alt = description
        caption.textContent = description

    })

function capitalize(string) {
    return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}