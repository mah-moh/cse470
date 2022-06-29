const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const indexRoute = require('./routes/index.route');
app.use('/', indexRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});