const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Client = require("../models/clientusers");

const clientauth = require("../middleware/clientauth");

const router = express.Router();



router.post("/client/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;


        if (!name || !email || !password) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        // Check existing email

        const existingClient = await Client.findOne({
            email: email
        });

        if (existingClient) {

            return res.status(400).json({
                message: "Email already registered"
            });

        }


        // Hash password

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        // Create client

        const client = new Client({

            name: name,
            email: email,
            password: hashedPassword

        });


        await client.save();


        // Create JWT

        const token = jwt.sign(

            {
                id: client._id,
                email: client.email
            },

            process.env.JWT_CLIENT,

            {
                expiresIn: "1h"
            }

        );


        res.status(201).json({

            message: "Registration successful",
            token: token

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});



// ================= LOGIN =================

router.post("/client/login", async (req, res) => {

    try {

        const { email, password } = req.body;


        // Find client

        const client = await Client.findOne({
            email: email
        });


        if (!client) {

            return res.status(401).json({
                message: "Invalid email or password"
            });

        }


        // Compare password

        const passwordMatch = await bcrypt.compare(
            password,
            client.password
        );


        if (!passwordMatch) {

            return res.status(401).json({
                message: "Invalid email or password"
            });

        }


        // Create JWT

        const token = jwt.sign(

            {
                id: client._id,
                email: client.email
            },

            process.env.JWT_CLIENT,

            {
                expiresIn: "1h"
            }

        );


        res.json({

            message: "Login successful",
            token: token

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

});



// ================= PROTECTED DASHBOARD =================

router.get("/client/dashboard", clientauth, async (req, res) => {

    try {

        // Get client using ID from JWT

        const client = await Client.findById(req.client.id)
            .select("-password");


        if (!client) {

            return res.status(404).json({
                message: "Client not found"
            });

        }


        res.json({

            message: "Client dashboard",
            client: client

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

});


module.exports = router;