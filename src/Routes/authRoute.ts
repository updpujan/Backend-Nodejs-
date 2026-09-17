import express from "express";
//import protect from "../middleware/authMiddleware.js"
import { register,login } from "../controller/authController.js";
import { emailChecker } from "../middleware/emailChecker.js";

const route = express.Router();

route.post("/registration",emailChecker,register);
route.post("/login",login);


export default route;
