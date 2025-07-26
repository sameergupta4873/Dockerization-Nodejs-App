const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.get("/", (req, res) => res.send("Hello from Dockerized Node App!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
