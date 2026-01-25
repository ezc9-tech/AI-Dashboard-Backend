import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware";
import { requireRole } from "../../middlewares/roles.middleware";
import { adminCheck } from "./admin.controller";


const adminRoutes = Router();

adminRoutes.get("/me", requireAuth, requireRole("ADMIN"), adminCheck);

export default adminRoutes;
