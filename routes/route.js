const express = require("express");
const controllers = require("../controllers/routes");
const router = express.Router();

//  create a route
router.post("/create-route", controllers.createRoute);
// get route
router.get("/routes", controllers.getRoutes);

module.exports = router;
