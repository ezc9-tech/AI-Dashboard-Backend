import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware";
import { getMyProfile, updateMyProfile } from "./users.controller";

const userRoutes = Router();

userRoutes.get("/me", requireAuth, getMyProfile)
userRoutes.patch("/me", requireAuth, updateMyProfile)

export default userRoutes