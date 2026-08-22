require("dotenv").config();
const express= require("express");
const cors=require("cors");
const mongoose=require("mongoose");


const app=express();
app.use(cors());
app.use(express.json());
const routeadmin=require("./routes/adminroute");

mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>console.log("server DB connected..."))
        .catch((err)=>console.log(err))
app.use("/api",routeadmin);        
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})        