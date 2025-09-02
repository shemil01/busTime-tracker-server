const express = require("express");
const controllers = require("../controllers/stop");
const router = express.Router();

//  create a stop
router.post("/create-stop", controllers.createStop);
// get stop
router.get("/stop", controllers.getStops);

module.exports = router;
