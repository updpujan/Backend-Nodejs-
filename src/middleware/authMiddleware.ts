import { Request,Response,NextFunction } from "express";
import Jwt from "jsonwebtoken";

const userProtection = (req:Request,res:Response,next:NextFunction)=>{
    const header = req.header("Authorization");
    
    //check if header is there or not
    if(!header){
        res.status(401).json({
            sucess: false,
            message:"User is not authenticated",
        });
    }
    else {
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            return res.status(500).json({
                sucess: false,
                message: "JWT secret is not configured",
            });
        }
        const [type,token] = header.split(" ");
        if (type !== "Bearer" || !token) {
            return res.status(401).json({
                sucess: false,
                message: "Invalid authorization format",
            });
        }
        try{
            const payload = Jwt.verify(token,secret,{
                algorithms: ["HS256"],
            });
             req.user = payload;
            next();
        }
        catch(err){
            res.status(401).json({
                sucess: false,
                message: "Invalid or expired Token",
            });
        }
    }
}

export default userProtection