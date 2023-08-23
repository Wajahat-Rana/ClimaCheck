const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // You can change this to any available port

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = '6c3ebdf33c374bd7b51ce332b4eb8efe';


    try {
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        const weatherData = response.data;

        res.json(weatherData); // Send weather data as JSON response to client
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
