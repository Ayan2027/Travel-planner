const { getWeatherForCity } = require("../services/weather.service");

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const weather = await getWeatherForCity(city);

    res.status(200).json({
      success: true,
      data: weather
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch weather",
      error: error.message
    });
  }
};

module.exports = { getWeather };
