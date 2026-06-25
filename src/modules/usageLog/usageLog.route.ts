import express from 'express';
import { usageLogController } from './usageLog.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post("/", auth(), usageLogController.createUsageLog);
router.get("/", usageLogController.getUsageLog);
router.patch("/:id", auth(), usageLogController.updateUsageLog);

export const usageLogRoutes = router;
