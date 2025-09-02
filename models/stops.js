const mongoose = require("mongoose");

const stopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // "Central Bus Stand"
    city: { type: String },
    coordinates: {
      // optional for future expansion (maps)
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Stop', stopSchema);
