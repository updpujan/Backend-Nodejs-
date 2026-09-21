import { Request,Response,NextFunction } from "express"
import getUsers from "../database/getUsers.js";

export const adminValidator = async (req:Request,res:Response,next:NextFunction) => {
    const data = req.user;
    const users = await getUsers();
    const safeUsers = users.rows.map(({ password, ...user }) => user);

    const admin = users.rows.find((admin)=> Number(admin.id) == Number(data?.sub));
    if(!admin || admin.role != "admin"){
        res.status(403).json({
            sucess: false,
            message: "You are not authorized for this page"
        });
    }
    else{
        res.status(200).json({
            sucess: true,
            message: "All users data fetched",
            users: safeUsers

        });

    }
};