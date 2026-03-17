import express from "express";
import {
  createLauncherHandler,
  getAllHandler,
  getByIdHandler,
  deleteByIdHandler,
} from "./launchers.controller.js";
import { rbacGuard } from "../../middleware/role.middleware.js";
import { jwtGuard } from "../../middleware/jwt.middleware.js";

const router = express.Router();

router.post("/", jwtGuard, rbacGuard("admin", "air"), createLauncherHandler);
router.get("/", jwtGuard, getAllHandler);
router.get("/:id", jwtGuard, getByIdHandler);
router.delete("/:id", jwtGuard, rbacGuard("admin", "air"), deleteByIdHandler);

export default router;
