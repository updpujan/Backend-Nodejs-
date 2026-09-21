import { Request,Response,NextFunction } from "express";
import getUserData from "../database/userProfile_data.js";

export const userProfile = async (req:Request, res:Response, next:NextFunction) => {
    const id = Number(req.user?.sub);
    const userData = await getUserData(id);
    res.json({
        sucess : true,
        name: userData.rows[0].name,
        id: userData.rows[0].id,
        email: userData.rows[0].email,
        role: userData.rows[0].role
    });
};