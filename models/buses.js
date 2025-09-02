import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  busNumber: { type: String, required: true }, // "KL-07-1234"
  route: { type: mongoose.Schema.Types.ObjectId, ref: "Route", required: true },
  operator: { type: String }, // KSRTC, Private, etc.
}, { timestamps: true });

export default mongoose.model("Bus", busSchema);
