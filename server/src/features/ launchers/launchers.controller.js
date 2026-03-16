import { createLauncherService } from "./launchers.service.js";

export const createLauncherHandler = async (req, res) => {
  try {
    const { city, name, rocketType, latitudeNumber, longitudeNumber } =
      req.body;

    const launcher = await createLauncherService({
      city,
      name,
      rocketType,
      latitudeNumber,
      longitudeNumber,
    });

    if (!launcher) {
      return res.status(500).json({
        ok: false,
        message: "Launcher creation failed",
      });
    }

    return res.status(201).json({
      ok: true,
      message: "The launcher was created successfully.",
      launcher,
    });

  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message,
    });
  }
};
