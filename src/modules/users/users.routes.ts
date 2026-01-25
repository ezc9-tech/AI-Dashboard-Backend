import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware";

const userRoutes = Router();

userRoutes.get("/me", requireAuth, (req, res) => {
    res.json({
        message: "Authenticated User",
        user: req.user,
    })
})

export default userRoutes