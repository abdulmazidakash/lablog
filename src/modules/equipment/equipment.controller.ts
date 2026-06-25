import { RequestHandler } from "express";
import { equipmentService } from "./equipment.service";
import sendResponse from "../../utils/sendResponse";

const createEquipment: RequestHandler = async (req, res, next) => {
    try {
        const equipment = await equipmentService.createEquipment(req.body);

        sendResponse(res, 201, {
            success: true,
            message: "Equipment Added Successfully",
            data: equipment,
        })
    } catch (error) {
        next(error);
    }
};

const getEquipment: RequestHandler = async (req, res, next) => {
    try {
        const equipment = await equipmentService.getEquipment(req.body);

        sendResponse(res, 200, {
            success: true,
            message: "Equipment Retrived Successfully",
            data: equipment,
        })

    } catch (error) {
        next(error);
    }
}

export const equipmentController = {
    createEquipment,
    getEquipment,
}