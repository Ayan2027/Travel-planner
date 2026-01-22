const express = require("express");
const { getRoute } = require("../controllers/route.controller");

const router = express.Router();

router.get("/", getRoute);

module.exports = router;
