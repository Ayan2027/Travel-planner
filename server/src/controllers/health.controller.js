const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Travel Planner backend is running successfully"
  });
};

module.exports = { healthCheck };
