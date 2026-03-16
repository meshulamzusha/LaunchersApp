import express from "express"
import { createLauncherHandler, getAllHandler, getByIdHandler } from "./launchers.controller.js"

const router = express.Router()

router.post("/", createLauncherHandler)
router.get("/", getAllHandler)
router.get("/:id", getByIdHandler)

export default router