import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./src/config/config.js";
import userRouter from "./src/routes/userRouter.js";
import errorHandler from "./src/middlewares/errorhandler.js";
import { AppError } from "./src/utils/utils.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
async function startServer() {
  try {
    await mongoose.connect(config.DB_URI);
    console.log("Connected to MongoDB");
    app.listen(config.PORT, () => {
      console.log("Server is running on port");
    });
  } catch (error) {
    console.error("Error Connecting the DB:", error);
    process.exit(1);
  }
}
mongoose.connection.on("error", () => {
  throw new AppError("Connection failed",503)
});
app.use(errorHandler)
startServer();
