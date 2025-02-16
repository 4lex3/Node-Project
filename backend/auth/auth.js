import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/server.config.js'


export const AuthMiddleware = (req, res, next) => {

    const token = req.header('Authorization')

    if(!token) return res.status(401).json({ message: 'Access denied. No token provided.' });
    
    try {
    
        const tokenDecoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        console.log(tokenDecoded)        

        next();

    } catch (error) {
        console.log("Invalid token provided");
        res.status(401).json({ message: "Invalid token provided"});  
    }

}