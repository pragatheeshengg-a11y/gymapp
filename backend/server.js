require("dotenv").config();
const express= require("express");
const cors=require("cors");
const mongoose=require("mongoose");


const app=express();
app.use(cors());
app.use(express.json());
const routeadmin=require("./routes/adminroute");
const routeclient = require("./routes/clientroute"); 
const routeworkout=require("./routes/workoutroute")

app.use("/api",routeadmin); 
app.use("/api", routeclient);  
app.use("/api",routeworkout);

mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>console.log("server DB connected..."))
        .catch((err)=>console.log(err))
     
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})        