import express from "express";
import protect from "../middleware/authMiddleware.js";
import { userProfile } from "../controller/userProfileController.js";

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


route.get("/userProfile", (req, res) => {
    res.render("user");
});

route.get("/user", protect, userProfile);


export default route