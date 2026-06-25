import express from 'express';
import { usageLogController } from './usageLog.controller';

const router = express.Router();

router.post("/", usageLogController.createUsageLog);
router.get("/", usageLogController.getUsageLog);

export const usageLogRoutes = router;
