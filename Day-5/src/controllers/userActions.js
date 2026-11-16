import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
  generateToken,
} from "../services/userServices.js";
import User from "../models/Schema.js";
import { AppError } from "../utils/utils.js";
import bcrypt from "bcrypt";

async function signUp(req, res,next) {
  try {
    const createdUser = await createUserService(req.body);
    res.status(201).json({ success: true, data: createdUser });
    if (!createdUser) {
      throw new AppError("User creation failed", 400);
    }
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new AppError("Invalid password", 401);
    }
    const token = await generateToken({ id: user._id, email: user.email });
    res.status(200).json({ success: true, token });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await getAllUsersService();
    if (users.length === 0) {
      throw new AppError("No users found", 204);
    }
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await getUserByIdService(req.params.id);
    res.status(200).json({ success: true, data: user });
    if (!user) {
      throw new AppError("User not found", 404);
    }
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await updateUserService(req.params.id, req.body);
    res.status(200).json({ success: true, data: updatedUser });
    if (!updatedUser) {
      throw new AppError("User not found", 404);
    }
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const deletedUser = await deleteUserService(req.params.id);
    res.status(200).json({ success: true, data: deletedUser });
    if (!deletedUser) {
      throw new AppError("User not found", 404);
    }
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ success: false, message: error.message });
  }
}

export { getAllUsers, getUserById, updateUser, deleteUser, signUp, signIn };
