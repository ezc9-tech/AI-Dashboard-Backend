import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import adminRoutes from "./modules/admin/admin.routes";
import userRoutes from "./modules/users/users.routes";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes)
app.use("/admin", adminRoutes)

app.use(errorHandler)


export default app;
