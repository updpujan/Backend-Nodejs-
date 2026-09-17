import { Request,Response,NextFunction } from "express";
import { getUserData } from "../repository/fileConnection.js";

export const userProfile = async (req:Request, res:Response, next:NextFunction) => {
    const id = Number(req.user?.sub);
    const userData = await getUserData(id);
    res.json({
        sucess : true,
        name: userData?.name,
        id: userData?.id,
        email: userData?.email,
        role: userData?.role
    });
};