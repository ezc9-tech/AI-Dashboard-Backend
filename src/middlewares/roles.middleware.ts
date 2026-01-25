import { NextFunction, Response } from "express";
import { AuthRequest } from "./auth.middleware";

export const requireRole = (role: "USER" | "ADMIN") => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden, you don't have the correct role" });
    }
    next();
  };
};
