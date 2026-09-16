import express from "express";
import {tokenGeneration} from "../utils/jwt.js";

const route = express.Router();

route.get("/",(req,res)=>{
    const token = tokenGeneration(123);
    res.json({token,});
});

export default route;
