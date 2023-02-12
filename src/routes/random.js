const path = require('path');
const gifs = path.join(process.cwd()) + '/public/assets/gifs';

const random = require('express').Router();
const util = require('util');
const fs = require('fs');
const readdir = util.promisify(fs.readdir);

random.get('/', async (req, res) => {
    let files = await readdir(gifs);
    let file = files[Math.floor(Math.random() * files.length)];

    if (files.includes('empty')) return res.status(400).json({ message: "Dear developer, the 'empty' file must be deleted :c" });

    return res.sendFile(gifs + '/' + file);
});

module.exports = random;