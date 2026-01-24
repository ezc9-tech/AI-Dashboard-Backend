import {Request, Response, NextFunction} from "express"
import { verifyToken } from "../utils/jwt"

export interface AuthRequest extends Request {
    user?: any
}

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({message: "Unauthorized"})
    }

    try {
        const token = header.split(" ")[1];
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid Token"})
    }
}