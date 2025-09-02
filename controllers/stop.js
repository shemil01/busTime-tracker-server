import Stop from "../models/stops";

export const createStop = async (req, res) => {
  try {
    const { name, city, coordinates } = req.body;
    const stop = await Stop.create({ name, city, coordinates });
    res.status(201).json(stop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStops = async (req, res) => {
  try {
    const stops = await Stop.find();
    res.json(stops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
