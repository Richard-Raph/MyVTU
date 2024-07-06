require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB database using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to the Database and running on port " + port))
    .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));

// Import routes for MTN Airtime
const mtnAirtimePurchaseRoute = require('./routes/airtime/mtn/purchase');
const mtnAirtimeRequeryRoute = require('./routes/airtime/mtn/requery');

// Import routes for MTN Data
const mtnDataVariationsRoute = require('./routes/data/mtn/variations');
const mtnDataPurchaseRoute = require('./routes/data/mtn/purchase');
const mtnDataRequeryRoute = require('./routes/data/mtn/requery');

// Import routes for GLO Data
const gloDataVariationsRoute = require('./routes/data/glo/variations');
const gloDataPurchaseRoute = require('./routes/data/glo/purchase');
const gloDataRequeryRoute = require('./routes/data/glo/requery');

// Use routes for MTN Airtime
app.use('/api/airtime/mtn/purchase', mtnAirtimePurchaseRoute);
app.use('/api/airtime/mtn/requery', mtnAirtimeRequeryRoute);

// Use routes for MTN Data
app.use('/api/data/mtn/variations', mtnDataVariationsRoute);
app.use('/api/data/mtn/purchase', mtnDataPurchaseRoute);
app.use('/api/data/mtn/requery', mtnDataRequeryRoute);

// Use routes for GLO Data
app.use('/api/data/glo/variations', gloDataVariationsRoute);
app.use('/api/data/glo/purchase', gloDataPurchaseRoute);
app.use('/api/data/glo/requery', gloDataRequeryRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});