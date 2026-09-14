import express from "express";
import serviceRouter from "./Routes/serviceRoute.js";
import route1 from "./Routes/homerRoute.js";

const app = express();
app.use(express.json());

//view engine using ejs
app.set("view engine","ejs");
app.set("views","./src/views");

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/service",serviceRouter);
app.use("/home",route1);
app.use((req,res)=>{
    res.status (404).json({
        error: "Route not found",
        path: `.${req.path}`
    });
});

export default app;
