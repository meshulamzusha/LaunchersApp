import express from "express"
import launcherRouter from "./features/ launchers/launchers.routes.js"

const app = express()

app.use(express.json())

app.use("/api/launchers", launcherRouter)

export default app