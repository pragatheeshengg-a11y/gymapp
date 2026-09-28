const express=require("express");
const router=express.Router();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const auth =require("../middleware/adminauth");
const Admin =require("../models/adminmodel");

router.post("/admin/login",async (req,res)=>{
    //console.log("hi backend")
    try{
        const {email,password}=req.body
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({
                message: "User Not Found"
            });
        }

        const match=await bcrypt.compare(password,admin.password);
        if(!match){
            return res.status(400).json({
                message: "Wrong Password"
            });
        } 

        const token =jwt.sign(
            {
                id:admin._id,
                email:admin.email
            },
            process.env.JWT_ADMIN,
            {
                expiresIn:"1hr"
            }
        )

        res.status(200).json(token)

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

})
router.get("/admin/dashboard",auth,async (req,res)=>{
    try{
        const name= await Admin.findById(req.user.id).select("name");
        res.status(200).json(name);

    }catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

})
module.exports= router;