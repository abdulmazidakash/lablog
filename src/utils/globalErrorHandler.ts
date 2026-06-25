import { ErrorRequestHandler } from "express";
import sendResponse from "../utils/sendResponse";
import { Prisma } from "../generated/prisma/client";

const globalErrorHandler: ErrorRequestHandler = (
    error,
    req,
    res,
    next
) => {

    // prisma error 
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
            return sendResponse(res, 409, {
                success: false,
                message: "Serial number already exists.",
            });
        }
        if (error.code === "P2025") {
            return sendResponse(res, 404, {
                success: false,
                message: "User not found"
            });
        }
    }


    sendResponse(res, 500, {
        success: false,
        message: error.message || "Something went wrong.",
    });
};

export default globalErrorHandler;