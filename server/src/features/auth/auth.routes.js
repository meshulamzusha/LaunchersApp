import express from "express"
import { createUserHandler } from "./auth.controller.js"
import { roleGuard } from "../../middleware/role.middleware.js"
import { jwtGuard } from "../../middleware/jwt.middleware.js"

const router = express.Router()

router.post("/",jwtGuard, roleGuard, createUserHandler)