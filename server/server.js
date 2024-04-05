require('dotenv').config()

const { configDotenv } = require('dotenv');
// import libraries
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

port = process.env.PORT

// Connect to MongoDB database using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to the Database and running on port " + port))
    .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));
