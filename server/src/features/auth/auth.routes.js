import express from "express"
import { createUserHandler, loginHandler } from "./auth.controller.js"
import { rbacGuard } from "../../middleware/role.middleware.js"
import { jwtGuard } from "../../middleware/jwt.middleware.js"

const router = express.Router()

router.post("/register/create",jwtGuard, rbacGuard("admin"), createUserHandler)
router.post("/login", loginHandler)

export default router