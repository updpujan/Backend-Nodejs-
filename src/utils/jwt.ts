import jwt from "jsonwebtoken";
import type { StringValue } from "ms";

export const tokenGeneration = (userId: number) => {
    const secret = process.env.JWT_SECRET;

    if(!secret) throw new Error("JWT_SECRET not defined");

    return jwt.sign({
        sub: userId,
        },
            secret,
        {
        expiresIn: process.env.JWT_EXPIRE_ACCESS_TOKEN as StringValue,
    });
};