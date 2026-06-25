import express from 'express';
import { usageLogController } from './usageLog.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post("/", auth(), usageLogController.createUsageLog);
router.get("/", usageLogController.getUsageLog);

export const usageLogRoutes = router;
