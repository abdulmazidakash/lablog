import { RequestHandler } from "express";
import { usageLogService } from "./usageLog.service";
import sendResponse from "../../utils/sendResponse";

const createUsageLog: RequestHandler = async (req, res, next) => {
    console.log(req.user);
    try {
        const usageLog = await usageLogService.createUsageLog(req.body, req.user.id as string);

        sendResponse(res, 201, {
            success: true,
            message: "Usagelog created Successfully",
            data: usageLog,
        })
    } catch (error) {
        next(error)
    }
};

const getUsageLog: RequestHandler = async (req, res, next) => {
    try {
        const usageLog = await usageLogService.getUsageLog();

        sendResponse(res, 200, {
            success: true,
            message: "Usagelog Retrieved Successfully",
            data: usageLog,
        })
    } catch (error) {
        next(error);
    }
}

export const usageLogController = {
    // Add controller methods here
    createUsageLog,
    getUsageLog,
};