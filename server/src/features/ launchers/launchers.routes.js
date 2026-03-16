import express from "express"
import { createLauncherHandler } from "./launchers.controller.js"

const router = express.Router()

router.post("/", createLauncherHandler)

export default router