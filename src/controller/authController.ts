import { User } from "../model/userModel.js";
import { registerService } from "../service/auth/registerService.js";
import { loginService } from "../service/auth/loginService.js"
import { Request,Response,NextFunction } from "express";


export const register = async (req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password,role} = req.body;
    const user:User ={
        id : null,
        name: name,
        email: email,
        password: password,
        role: role
    };
    const response = await registerService(user);
    res.json(response);

};


export const login = async (req:Request,res:Response,next:NextFunction) => {
    const {email,password} = await req.body;
    const response = await loginService(email,password);
    res.json(response);

};