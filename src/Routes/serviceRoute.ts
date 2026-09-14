import express from "express";

const router = express.Router();

router.get('/:id/:name',(req,res)=>{
    res.send(` This is get method of route\n ID:${req.params.id}\nName:${req.params.name}`);
    console.log("Get request received at:"+Date.now());
});

router.post("/",(req,res)=>{
    res.send("THis is post router");
});

router.put("/",(req,res)=>{
    res.send("THis is  router");
});

router.delete("/",(req,res)=>{
    res.send("THis is delete router");
});

export default router