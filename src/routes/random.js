const gifs = './public/assets/gifs'
const random = require('express').Router();
const fs = require('fs')

random.get('/', async (req, res) => {

    fs.readdir(gifs, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });

    return res.status(400).json({ message: "test" })
});

module.exports = random;