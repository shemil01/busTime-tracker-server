import Schedule from "../models/schedules";

export const createSchedule = async (req, res) => {
  try {
    const { bus, stop, arrivalTime, dayType } = req.body;
    const schedule = await Schedule.create({ bus, stop, arrivalTime, dayType });
    res.status(201).json(schedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find()
      .populate("bus")
      .populate("stop");
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
