import Route from "../models/routes.js";
import Schedule from "../models/schedules.js";
import Stop from "../models/stops.js";

export const searchBus = async (req, res) => {
  try {
    const { from, to, time } = req.query;

    // Find stops
    const fromStop = await Stop.findOne({ name: from });
    const toStop = await Stop.findOne({ name: to });
    if (!fromStop || !toStop) return res.status(404).json({ message: "Stops not found" });

    // Find routes containing both stops in correct order
    const routes = await Route.find({
      "stops.stop": { $all: [fromStop._id, toStop._id] }
    }).populate("stops.stop");

    let results = [];

    for (const route of routes) {
      const fromIndex = route.stops.findIndex(s => s.stop._id.equals(fromStop._id));
      const toIndex = route.stops.findIndex(s => s.stop._id.equals(toStop._id));
      if (fromIndex < toIndex) {
        // Find upcoming schedules for "fromStop"
        const schedules = await Schedule.find({
          stop: fromStop._id,
          arrivalTime: { $gte: time }
        }).populate("bus stop");

        for (const sch of schedules) {
          // Estimate arrival at "toStop"
          const toSchedule = await Schedule.findOne({
            bus: sch.bus._id,
            stop: toStop._id
          });

          results.push({
            busNumber: sch.bus.busNumber,
            route: route.name,
            fromStop: fromStop.name,
            departureTime: sch.arrivalTime,
            toStop: toStop.name,
            arrivalTime: toSchedule?.arrivalTime || "Unknown"
          });
        }
      }
    }

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
