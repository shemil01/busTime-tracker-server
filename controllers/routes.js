const Route = require('../models/routes')

export const createRoute = async (req, res) => {
  try {
    const { name, startStop, endStop, stops } = req.body;
    const route = await Route.create({ name, startStop, endStop, stops });
    res.status(201).json(route);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find().populate("stops.stop");
    res.json(routes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
