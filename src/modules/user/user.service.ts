import { prisma } from "../../lib/prisma"
import bcrypt from "bcrypt";

const register = async (payload: any) => {
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await prisma.user.create({
        data: {
            ...payload,
            password: hashedPassword,
        }
    });

    return user;
};

const login = async (payload: any) => {
    const { email, password } = payload;

    // check user exist
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not Found");

    // compare password
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (isPasswordMatched) throw new Error("Invalid Password");

    // remove password before returning
    const { password: _, ...userData } = user;
    return userData;
}

export const userService = {
    register,
    login,
}