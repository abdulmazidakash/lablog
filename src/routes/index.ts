import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { equipmentRoutes } from "../modules/equipment/equipment.route";
import { usageLogRoutes } from "../modules/usageLog/usageLog.route";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/equipment", equipmentRoutes);
routes.use("/usage-log", usageLogRoutes);

export default routes;