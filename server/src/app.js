const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");

const app = express();
const weatherRoutes = require("./routes/weather.routes");


app.use(cors());
app.use(express.json());

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/weather", weatherRoutes);


module.exports = app;
