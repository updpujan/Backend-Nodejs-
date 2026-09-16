import { Request,Response,NextFunction } from "express";
import { register } from "../controller/authController.js";


export const validateRegistration = async (req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password} = req.body;
    const messgae = await register(name,email,password);
    res.json(messgae);

};