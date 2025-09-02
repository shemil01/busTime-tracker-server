import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
  stop: { type: mongoose.Schema.Types.ObjectId, ref: "Stop", required: true },
  arrivalTime: { type: String, required: true }, // "HH:mm" format
  dayType: { type: String, enum: ["weekday", "weekend", "holiday"], default: "weekday" }
}, { timestamps: true });

// Index for fast search
scheduleSchema.index({ bus: 1, stop: 1 });

export default mongoose.model("Schedule", scheduleSchema);
