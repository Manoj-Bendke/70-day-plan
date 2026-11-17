import { verifyToken } from "../services/token.js";
import { AppError } from "../utils/utils.js";
async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Missing or invalid authorization header", 401);
    }

    // 2. Safely extract the token after confirming the header format
    const token = authHeader.split(" ")[1];

    if (!token) {
      throw new AppError("No token provided", 401);
    }

    const decoded = await verifyToken(token);
    req.user = decoded;
    res.locals = decoded;
    next();
  } catch (error) {
    next(error);
  }
}

export { authenticate };
