import { Request,Response,NextFunction } from "express";

const loggerMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    console.log(`${req.method} ${req.url}`);
    return res.status(403).json({
    message: "Blocked by middleware"
});
};

export default loggerMiddleware