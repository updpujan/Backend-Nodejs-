import express from "express";

const route = express.Router();

route.get("/",(req,res)=>{
    res.render("home",{
        name:"Pujan",
        role:"Backend Developer"
    });
});

export default route