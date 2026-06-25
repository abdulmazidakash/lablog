import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { equipmentRoutes } from "../modules/equipment/equipment.route";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/equipment", equipmentRoutes);

export default routes;