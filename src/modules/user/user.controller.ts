import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

const register: RequestHandler = async (req, res) => {

    const user = await userService.register(req.body);

    sendResponse(res, 201, {
        success: true,
        message: "User Registered Successfully",
        data: user
    })
};

export const userController = {
    register,
}