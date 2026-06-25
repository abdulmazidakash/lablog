import { ErrorRequestHandler } from "express";
import sendResponse from "../utils/sendResponse";

const globalErrorHandler: ErrorRequestHandler = (
    error,
    req,
    res,
    next
) => {
    if (error.code === "P2002") {
        return sendResponse(res, 409, {
            success: false,
            message: "Serial number already exists.",
        });
    }

    sendResponse(res, 500, {
        success: false,
        message: error.message || "Something went wrong.",
    });
};

export default globalErrorHandler;