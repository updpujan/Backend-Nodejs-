import { getUsers } from "../repository/fileConnection.js";
import { Request,Response,NextFunction } from "express";

export const emailChecker = (req:Request,res:Response,next:NextFunction) => {
    const email = req.body.email;
    const users = getUsers();
    const emailCheck = users.find((user) => user.email == email);
    if(emailCheck){
        res.json({
            sucess: false,
            message: "Email Already exists"
        });
    }

    next();

};