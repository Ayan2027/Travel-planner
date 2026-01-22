const axios = require("axios");

const getWeatherForCity = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);

  return {
  city: response.data.name,
  temperature: response.data.main.temp,
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  lat: response.data.coord.lat,
  lon: response.data.coord.lon
 };

};

module.exports = { getWeatherForCity };
