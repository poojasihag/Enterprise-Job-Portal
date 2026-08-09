import { Router } from "express";

// import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/users/users.routes.ts";
// import jobRoutes from "../modules/jobs/job.routes";

const router = Router();

// router.use("/auth", authRoutes);
router.use("/users", userRoutes);

// router.use("/jobs", jobRoutes);

export default router;