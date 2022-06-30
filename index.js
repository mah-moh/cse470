const express = require('express');
const path = require('path');
const { default: mongoose } = require('mongoose');

const app = express();

const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, async(err) => {
    if (err) throw err;
    console.log("connected to db")
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const indexRoute = require('./routes/index.route');

app.use('/', indexRoute);

app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});