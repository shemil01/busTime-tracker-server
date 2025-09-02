import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g. "Route 101"
  startStop: { type: mongoose.Schema.Types.ObjectId, ref: "Stop", required: true },
  endStop: { type: mongoose.Schema.Types.ObjectId, ref: "Stop", required: true },
  stops: [
    {
      stop: { type: mongoose.Schema.Types.ObjectId, ref: "Stop", required: true },
      order: { type: Number, required: true }, // stop sequence
    }
  ]
}, { timestamps: true });

export default mongoose.model("Route", routeSchema);
