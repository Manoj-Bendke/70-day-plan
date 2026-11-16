import { validateUser } from "../middlewares/validators.js";
import { verifyToken } from "../services/token.js";
import {
  signUp,
  signIn,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userActions.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/signUp",validateUser, signUp);
userRouter.post("/login",validateUser, signIn);
userRouter.get("/",validateUser,verifyToken, getAllUsers);
userRouter.get("/:id", validateUser,verifyToken,getUserById);
userRouter.patch("/:id",validateUser,verifyToken, updateUser);
userRouter.delete("/:id",validateUser,verifyToken, deleteUser);

export default userRouter;
