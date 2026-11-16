import bcrypt from "bcrypt";
import { AppError } from "../utils/utils.js";
async function hashPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new AppError("Password hashing failed", 500);
  }
}

export { hashPassword };