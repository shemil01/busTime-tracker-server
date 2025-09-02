const express = require("express");
const controllers = require("../controllers/bus");
const router = express.Router();

// add bus
router.post("/add-bus", controllers.createBus);

// get all bus
router.get("/bus", controllers.getBuses);

module.exports = router;
