const express = require('express');
const app = express();
// REMOVE
const port = 3031

// ROUTER
const random = require('./src/routes/random');

app.use('/random', random);

app.listen(port, () => {
    console.log(`The server is up and running on port ${port}.`)
});