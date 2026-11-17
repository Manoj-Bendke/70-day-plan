import { AppError } from "../utils/utils.js";
async function userAuthorization(req, res, next) {
  try {
    const id = req.params.id;
    console.log(id);
    console.log(res.locals.id);
    if (id.toString() !== res.locals.id.toString()) {
      return next(new AppError("You are not authorized for this operation", 401));
    }
    next();
  } catch (e) {
    res.json({ Error: e.message });
  }
}

export { userAuthorization };
