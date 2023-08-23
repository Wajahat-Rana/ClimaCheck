const form = document.getElementById('weather-form');
const weather_results = document.getElementById('weather-results');
const city_name = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;

    try {
        const response = await fetch(`/weather?city=${city}`);
        const weatherData = await response.json();

        city_name.innerText = city;
        temperature.innerText = weatherData.main.temp + '°C';
        description.innerText = weatherData.weather[0].description;

        weather_results.style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});
