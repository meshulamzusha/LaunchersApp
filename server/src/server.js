import app from "./app.js"
import { connectDB } from "./db/dbConnection.js";

const PORT = 3000

connectDB()

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});