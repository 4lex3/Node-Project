import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/server.config.js';

export const UNAUTHORIZED = {
    "Message": 'Not authorized, incorrect credentials!'
};


export const LoginController = (req, res) => {

    const { email, password } = req.body; 

    if(!email || !password) return res.status(401).json(UNAUTHORIZED);

    if(email !== "admin@etpx.com" || password !==  'admin') return res.status(401).json(UNAUTHORIZED);

    const newToken = jwt.sign(
        {id: 1, email: email},
        JWT_SECRET,
        { expiresIn: '1h' }  
    );

    return res.status(200).json({
        Authorization: `Bearer ${newToken}`
    })
};