console.log("ROUTE SERVICE LOADED - HAVERSINE VERSION");

const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;

// Get coordinates from OpenWeather
const getCoords = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const res = await axios.get(url);
  return {
    lat: res.data.coord.lat,
    lon: res.data.coord.lon
  };
};

// Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const getRouteInfo = async (from, to) => {
  const start = await getCoords(from);
  const end = await getCoords(to);

  const distance = calculateDistance(start.lat, start.lon, end.lat, end.lon);

  const avgSpeed = 60; // km/h
  const time = distance / avgSpeed;

  return {
    distance_km: distance.toFixed(2),
    travel_time_hr: time.toFixed(2)
  };
};

module.exports = { getRouteInfo };
