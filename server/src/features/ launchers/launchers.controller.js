import { createLauncherService, getAllService, getByIdService } from "./launchers.service.js";

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

export const getAllHandler = async (req, res) => {
  try {
    const launchers = await getAllService();

    return res.status(200).json({
      ok: true,
      launchers,
    });

  } catch (error) {
    console.log(error);
    
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message,
    });
  }
};

export const getByIdHandler = async (req, res) => {
  try {
    const {id} = req.params
    
    const launcher = await getByIdService(id)

    return res.status(200).json({
      ok: true,
      launcher,
    })
    
  } catch (error) {
    console.log(error);
    
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message
    })
  }
}
