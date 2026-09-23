import express from "express";
import protect from "../middleware/authMiddleware.js";
import { userProfile } from "../controller/userProfileController.js";
import { adminValidator } from "../middleware/adminValidator.js";

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

route.get("/adminPage",(req,res)=>{
    res.render("admin");
});
route.get('/admin',protect,adminValidator);




route.get("/userProfile", (req, res) => {
    res.render("user");
});
route.get("/user", protect, userProfile);


route.get("/socket",(req,res)=>{
    res.render("websockettest");
});


export default route