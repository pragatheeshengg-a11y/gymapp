require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const routeadmin = require("./routes/adminroute");
const routeclient = require("./routes/clientroute");
const routeworkout = require("./routes/workoutroute");

app.use("/api", routeadmin);
app.use("/api", routeclient);
app.use("/api", routeworkout);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Server DB connected..."))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on ${PORT}`);
});