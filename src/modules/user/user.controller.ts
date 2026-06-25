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

const login: RequestHandler = async (req, res, next) => {
    try {
        const user = await userService.login(req.body);

        sendResponse(res, 200, {
            success: true,
            message: "User login Successfully",
            data: user,
        })
    } catch (error) {
        next(error);
    }


}



export const userController = {
    register,
    login,
};
