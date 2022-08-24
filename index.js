const express = require('express');
const path = require('path');
const { default: mongoose } = require('mongoose');
const indexRoute = require('./routes/index.route');
const userRoute = require('./routes/user.route');
const body_parser = require('body-parser');
const http = require('http');
const socket = require('socket.io');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(body_parser.json());

require('dotenv').config();

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, async(err) => {
    if (err) throw err;
    console.log("connected to db")
});
const db = mongoose.connection;

db.once('open', () => {
    console.log("MongoDB database connection established successfully");
})



app.use('/', indexRoute);
app.use('/user', userRoute);

const server = http.createServer(app);
const io = socket(server);


function onConnection(socket){
    console.log("New client connected");
    socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

io.on('connection', onConnection);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = db;