import express from "express";
import "dotenv/config";


import route1 from "./Routes/frontendRoute.js";
import loggerMiddleware  from "./middleware/loggerMiddleware.js";
import authRoute from "./Routes/authRoute.js"
import userProtection from "./middleware/authMiddleware.js";



const app = express();
app.use(express.json());
app.use(loggerMiddleware);


//view engine using ejs
app.set("view engine","ejs");
app.set("views","./src/views");

//home page
app.use("/",route1);
app.use("/",authRoute);


//invalid path/route
app.use((req,res)=>{
    res.status (404).json({
        error: "Route not found",
        path: `.${req.path}`
    });
});

export default app;
