const express = require("express");

const Workout = require("../models/workout");
const Client = require("../models/clientusers");

const clientauth = require("../middleware/clientauth");

const router = express.Router();


// ===============================
// GET ALL CLIENTS
// ===============================

router.get("/admin/clients", async (req, res) => {

    try {

        const clients = await Client
            .find()
            .select("-password");

        res.json({
            clients: clients
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

});


// ===============================
// ADD WORKOUT
// ===============================

router.post("/admin/workout", async (req, res) => {

    try {

        const {
            clientId,
            exercise,
            sets,
            reps,
            day
        } = req.body;


        if (
            !clientId ||
            !exercise ||
            !sets ||
            !reps ||
            !day
        ) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        const client = await Client.findById(clientId);

        if (!client) {

            return res.status(404).json({
                message: "Client not found"
            });

        }


        const workout = new Workout({

            clientId: clientId,
            exercise: exercise,
            sets: sets,
            reps: reps,
            day: day

        });


        await workout.save();


        res.status(201).json({

            message: "Workout added successfully",

            workout: workout

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });

    }

});


// ===============================
// CLIENT WORKOUTS
// ===============================

router.get(
    "/client/workouts",
    clientauth,
    async (req, res) => {

        try {

            const clientId = req.client.id;

            const workouts = await Workout.find({
                clientId: clientId
            });

            res.json({
                workouts: workouts
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                message: "Server error"
            });

        }

    }
);


module.exports = router;