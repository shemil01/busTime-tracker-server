import Bus from "../models/buses";

export const createBus = async (req, res) => {
  try {
    const { busNumber, route, operator } = req.body;
    const bus = await Bus.create({ busNumber, route, operator });
    res.status(201).json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBuses = async (req, res) => {
  try {
    const buses = await Bus.find().populate("route");
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};