import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import {AppError} from '../utils/utils.js';
  async function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new AppError('Token verification failed', 401);
    }
  }
  export {verifyToken};