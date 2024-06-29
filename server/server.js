require('dotenv').config()

// import libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 6000

app.use(express.json());
app.use(bodyParser.json());


// Connect to MongoDB database using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to the Database and running on port " + port))
    .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));


// Import routes
const variationsRoute = require('./routes/airtime/mtn/variations');
// const purchaseRoute = require('./routes/airtime/mtn/purchase');
// const queryStatusRoute = require('./routes/airtime/mtn/queryStatus');

// Use routes
app.use('/api/variations', variationsRoute);
// app.use('/api/purchase', purchaseRoute);
// app.use('/api/query-status', queryStatusRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});