const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({

    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },

    exercise: {
        type: String,
        required: true
    },

    sets: {
        type: Number,
        required: true
    },

    reps: {
        type: Number,
        required: true
    },

    day: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Workout", workoutSchema);