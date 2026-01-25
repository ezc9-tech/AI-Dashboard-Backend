import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";

export const adminCheck = (req: AuthRequest, res: Response) => {
  res.json({ message: "Admin authenticated", user: req.user});
};
