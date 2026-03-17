import express from "express"
import cors from "cors"
import launcherRouter from "./features/ launchers/launchers.routes.js"
import authRouter from "./features/auth/auth.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/launchers",cors(), launcherRouter)
app.use("/api/auth", authRouter)

export default app