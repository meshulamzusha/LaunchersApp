import express from "express"
import { createUserHandler, loginHandler, getUserHandler } from "./auth.controller.js"
import { rbacGuard } from "../../middleware/role.middleware.js"
import { jwtGuard } from "../../middleware/jwt.middleware.js"

const router = express.Router()

router.post("/register/create",jwtGuard, rbacGuard("admin"), createUserHandler)
router.post("/login", loginHandler)
router.get("/getUser", jwtGuard, getUserHandler) < input;

export default router