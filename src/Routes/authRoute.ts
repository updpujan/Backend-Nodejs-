import express from "express";
import {tokenGeneration} from "../utils/jwt.js";
import protect from "../middleware/authMiddleware.js"
import { validateRegistration } from "../middleware/validationMiddleware.js";

const route = express.Router();

route.get("/login",(req,res)=>{
    const token = tokenGeneration(123);
    res.json({token,});
});

route.post("/registration",validateRegistration);


export default route;
