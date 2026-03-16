import { Launcher } from "./launchers.schema.js";

export const createLauncherService = async (launcherDetails) => {
  try {
    const launcher = await Launcher.create({
      city: launcherDetails.city,
      name: launcherDetails.name,
      rocketType: launcherDetails.rocketType,
      latitudeNumber: launcherDetails.latitudeNumber,
      longitudeNumber: launcherDetails.longitudeNumber,
    });

    return launcher;
  } catch (err) {
    const error = new Error("Launcher creation failed");
    error.status = 500;
    throw error;
  }
};

export const getAllService = async () => {
  try {
    const launchers = await Launcher.find({});

    if (!launchers) {
      const error = new Error("db problem");
      error.status = 500;
      throw error;
    }

    return launchers;
  } catch (err) {
    const error = new Error("Failed to obtain launchers.");
    error.status = 500;
    throw error;
  }
};

export const getByIdService = async (id) => {
  try {
    const launcher = await Launcher.findById(id);

    if (!launcher) {
      const error = new Error("Launcher not found.");
      error.status = 404;
      throw error;
    }

    return launcher
    
  } catch (err) {
    console.log(err);
    
    const error = new Error("Failed to obtain launcher.");
    error.status = 500;
    throw error;
  }
};
