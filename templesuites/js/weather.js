const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1c15ca44d579560748c473e0caa12353&q=Fontana&units=imperial'

const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

fetch(apiUrl)
    .then(response => response.json())
    .then(weatherObject => {

        console.log(weatherObject)

        // Gets 1 day forecast
        const currentWeather = weatherObject.list[0];
        const temperature = currentWeather.main.temp;
        const image = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
        const description = capitalize(currentWeather.weather[0].description);
        const feelsLike = currentWeather.main.feels_like;
        const humidity = currentWeather.main.humidity;
        
        let currentCondition = document.getElementById("weather-condition");
        let curentTemp = document.getElementById('weather-degrees');
        let weatherImg = document.getElementById('weather-image');
        let currentFeelsLike = document.getElementById("weather-feels-like");
        let currentHumidity = document.getElementById('weather-humidity');

        currentCondition.textContent = description;
        curentTemp.textContent = `Degrees: ${temperature}`;
        weatherImg.src = image;
        weatherImg.alt = description;
        currentFeelsLike.textContent = `Feels Like: ${feelsLike}`;
        currentHumidity.textContent = `Humidity: ${humidity}`;

        // Gets 3 Day forcast
        const forecastList = [0,1,2]
        const weeklyWeather = document.getElementById("weekly-weather");

        forecastList.map(day => {
            createSingleForecast(day, weatherObject, weeklyWeather)
        });
    })

    function capitalize(string) {
        return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    }

    function createSingleForecast(index, weatherObject, placement) {
        let weatherDay = weatherObject.list[index];
        let condition = capitalize(weatherDay.weather[0].description);
        let degrees = weatherDay.main.temp;

        let div = document.createElement('div');
        div.classList.add("weekly-weather");
        let p1 = document.createElement("p")
        p1.textContent = condition;
        let p2 = document.createElement('p');
        p2.textContent = degrees;

        div.append(p1,p2);

        placement.append(div);
    }