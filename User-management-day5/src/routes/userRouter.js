import { validateUser, loginValidation } from "../middlewares/validators.js";
import { userAuthorization } from "../middlewares/authorization.js";
import { authenticate } from "../middlewares/authentication.js";
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

userRouter.post("/signUp", validateUser, signUp);
userRouter.post("/login", loginValidation, signIn);
userRouter.get("/", authenticate, getAllUsers);
userRouter.get("/:id", authenticate,userAuthorization, getUserById);
userRouter.patch("/:id", validateUser, authenticate,userAuthorization, updateUser);
userRouter.delete("/:id", authenticate, userAuthorization, deleteUser);

export default userRouter;
