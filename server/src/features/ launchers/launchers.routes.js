import express from "express";
import {
  createLauncherHandler,
  getAllHandler,
  getByIdHandler,
  deleteByIdHandler,
} from "./launchers.controller.js";

const router = express.Router();

router.post("/", createLauncherHandler);
router.get("/", getAllHandler);
router.get("/:id", getByIdHandler);
router.delete("/:id", deleteByIdHandler);

export default router;
