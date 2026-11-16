import {verifyToken} from '../services/token.js'
import {AppError} from '../utils/utils.js'
async function authenticate(req,res,next){
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            throw new AppError('No token provided',401);
        }
        const decoded = await verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(error.statusCode || 500).json({success:false,message:error.message});
    }
  }
  export {authenticate}