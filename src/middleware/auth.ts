import { NextFunction, Request, Response } from "express";
import { Role } from "../generated/prisma/enums";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            user: JwtPayload;
        }
    }
}

const auth = (roles?: Role[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) res.status(401).send("Please provide token");

        try {
            const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string);
            console.log('decoded: ==>', decoded);

            if (!decoded) return res.send("Unauthorized");

            req.user = decoded as JwtPayload;

            //role based authentication
            if (roles && !roles.includes(req.user.role)) {
                res.send("Forbidden")
            }

            next();
        } catch (error) {
            console.error(error);
        }
    }
};

export default auth;