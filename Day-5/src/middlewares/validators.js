import { userValidationSchema } from "../validators/validation.js";
import {AppError} from "../utils/utils.js";

async function validateUser(req, res, next) {
  try {
    const result = await userValidationSchema.safeParse(req.body);
    if (!result.success) {
      throw new AppError(result.error.issues[0].message, 400);
    }
    next();
  } catch (error) {
    next(error);
  }
}

export { validateUser };
