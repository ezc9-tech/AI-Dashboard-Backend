import { Response } from "express"
import { AuthRequest } from "../../middlewares/auth.middleware"
import { getUserById, updateUserById } from "./users.service";


export const getMyProfile = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;

    if (!userId) {
        return res.status(401).json({message: "Unauthorized"})
    }

    const user = await getUserById(userId);
    res.json(user);
}

export const updateMyProfile = async (req: AuthRequest, res: Response) => {
    const userId = req.user?.userId;

    if (!userId) {
        return res.status(401).json({message: "Unauthorized"})
    }

    const {name, email} = req.params

    const updatedUser = await updateUserById(userId, {name, email});
    res.json(updatedUser);
}

