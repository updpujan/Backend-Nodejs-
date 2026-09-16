import express from "express";

const route = express.Router();

route.get("/",(req,res)=>{
    res.render("home");
});

route.get("/login",(req,res)=>{
    res.render("login");
});

route.get("/registration",(req,res)=>{
    res.render("registration");
});

route.get("/admin",(req,res)=>{
    res.render("admin");
});

route.get("/user",(req,res)=>{
    res.render("user");
});


export default route