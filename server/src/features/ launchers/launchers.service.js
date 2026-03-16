import { Launcher } from "./launchers.schema.js";

export const createLauncherService = async (launcherDetails) => {
    try {

        const launcher = await Launcher.create({
            city: launcherDetails.city,
            name: launcherDetails.name,
            rocketType: launcherDetails.rocketType,
            latitudeNumber: launcherDetails.latitudeNumber,
            longitudeNumber: launcherDetails.longitudeNumber
        })

        return launcher
        
    } catch (err) {
        const error = new Error("Launcher creation failed");
        error.status = 500
        throw error
    }
}