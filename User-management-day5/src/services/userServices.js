import User from "../models/Schema.js";
import { AppError } from "../utils/utils.js";
import { hashPassword } from "./hasher.js";
import config from "../config/config.js";
import jwt from "jsonwebtoken";

async function createUserService(userData) {
  const result = await User.findOne({ email: userData.email });
  if (result) {
    throw new AppError("User already exists", 409);
  }
  userData.password = await hashPassword(userData.password);
  return await User.create(userData);
}

async function generateToken(payload) {
  try {
    const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.log(error);
    throw new AppError("Token generation failed", 500);
  }
}

async function getAllUsersService() {
  const result = await User.find();
  if (!result) {
    throw new AppError("No users found", 404);
  }
  return result;
}
async function getUserByIdService(id) {
  const result = await User.findById(id);
  if (!result) {
    throw new AppError("User not found", 404);
  }
  return result;
}

async function updateUserService(id, userData) {
  const result = await User.findByIdAndUpdate(
    id,
    {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    },
    {
      new: true,
      runValidators: true,
    },
  );
  if (!result) {
    throw new AppError("User not found", 404);
  }
  return result;
}

async function deleteUserService(id) {
  const result = await User.findByIdAndDelete(id);
  if (!result) {
    throw new AppError("User not found", 404);
  }
  return result;
}

export {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
  generateToken,
};
