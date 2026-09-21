import { Request,Response,NextFunction } from "express";
import checkUserEmail from "../database/checkUserEmail.js";

export const emailChecker = async (req:Request,res:Response,next:NextFunction) => {
    const email = req.body.email;
    const user = await checkUserEmail(email);
    if(user.rowCount == 0){
        next();
    }
    else{
        res.json({
            sucess: false,
            message: "Email Already exists"
        });
    }

    

};