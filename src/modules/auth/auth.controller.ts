import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";
import { prisma } from "../../config/db";
import { AuthRequest } from "../../middlewares/auth.middleware";

export const register = async (req: Request, res: Response) => {
    try {
        const {email, password, name} = req.body;
        const user = await registerUser(email, password, name);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const result = await loginUser(email, password);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}


export const me = async (req: AuthRequest, res: any) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    res.json(user);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
