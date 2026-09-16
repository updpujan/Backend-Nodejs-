import { Request,Response,NextFunction } from "express";
import fs from "node:fs";


const loggerMiddleware = (req:Request,res:Response,next:NextFunction)=>{

    const timeStamp = Date.now();
    const method = req.method;
    const url = req.originalUrl;
    const ip = req.ip;

    const logPath = "/home/pujan-upd/Desktop/Backend(Nodejs)/backend/log/system.log";


    if(fs.existsSync(logPath)){
        fs.appendFile(logPath,`${timeStamp}: ip"${ip}" : ${method}-${url}\n`,(err)=>{
            if(err) console.log("Failed to Append log:"+err);
        });
    }else{
        fs.writeFile(logPath,`${timeStamp}: ip"${ip}" : ${method}-${url}\n`,(err)=>{
            if(err) console.log("Failed to write log:"+err);
        });
    }
    next();

};

export default loggerMiddleware