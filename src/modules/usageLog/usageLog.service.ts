import { prisma } from "../../lib/prisma";

const createUsageLog = async (payload: any, userId: string) => {
    const usageLog = await prisma.usageLog.create({
        data: {
            ...payload,
            userId
        }
    });
    return usageLog;
}

const getUsageLog = async () => {
    const usageLog = await prisma.usageLog.findMany({
        include: {
            user: true,
            equipment: true,
        }
    });
    return usageLog;
};

const updateUsageLog = async (id: string, payload: any) => {
    const usageLog = await prisma.usageLog.update({
        where: { id },
        data: {
            endtime: new Date(),
        }
    });
    return usageLog;
}
export const usageLogService = {
    // Add service methods here
    createUsageLog,
    getUsageLog,
    updateUsageLog,
};