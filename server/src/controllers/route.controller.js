const { getRouteInfo } = require("../services/route.service");

const getRoute = async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to) {
      return res.status(400).json({ error: "From and To locations are required" });
    }

    const route = await getRouteInfo(from, to);

    res.json({
      success: true,
      data: route
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch route info",
      error: err.message
    });
  }
};

module.exports = { getRoute };
