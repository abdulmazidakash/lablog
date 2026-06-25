import { prisma } from "../../lib/prisma"

const createEquipment = async (payload: any) => {
    const equipment = await prisma.equipment.create({
        data: payload,
    });

    return equipment;
};

const getEquipment = async (payload: any) => {
    const equipment = await prisma.equipment.findMany();

    return equipment;
}

export const equipmentService = {
    createEquipment,
    getEquipment,
}