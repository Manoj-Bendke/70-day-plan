import {
  userValidationSchema,
  loginValidationSchema,
} from "../validators/validation.js";
import { AppError } from "../utils/utils.js";

async function validateUser(req, res, next) {
  try {
    const result = await userValidationSchema.safeParse(req.body);
    if (!result.success) {
      return res.json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
}

async function loginValidation(req, res, next) {
  try {
    const result = await loginValidationSchema.safeParse(req.body);
    if (!result.success) {
      return res.json({
        success: false,
        errors: result.error.flatten().fieldErrors,
      });
    }
    next();
  } catch (error) {
    next(error);
  }
}
export { validateUser, loginValidation };
