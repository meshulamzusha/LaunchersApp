import mongoose from "mongoose";

const { Schema } = mongoose;

const launcherSchema = new Schema({
  city: { type: String, required: true },
  rocketType: {
    type: String,
    enum: ["Shahab3", "Fetah110", "Radwan", "Kheibar"],
    required: true,
  },
  latitudeNumber: { type: Number, required: true },
  longitudeNumber: { type: Number, required: true },
  name: {
    type: String,
    required: true,
  },
});

export const Launcher = mongoose.model("Launcher", launcherSchema);
