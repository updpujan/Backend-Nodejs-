import { Request,Response,NextFunction } from "express"
import { getUsers } from "../repository/fileConnection.js";
import { get } from "http";

export const adminValidator = async (req:Request,res:Response,next:NextFunction) => {
    const data = req.user;
    const users = getUsers();
    const safeUsers = users.map(({ password, ...user }) => user);

    const admin = users.find((admin)=> Number(admin.id) == Number(data?.sub));
    if(!admin || admin.role != "admin"){
        res.status(403).json({
            sucess: false,
            message: "You are not authorized for this page"
        });
    }
    res.status(200).json({
        sucess: true,
        message: "All users data fetched",
        users: safeUsers

    });
};