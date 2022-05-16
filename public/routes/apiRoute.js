const path = require('path');
const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
    readAndDelete,
} = require('../helpers/fsUtils');


// GET call
router.get('/notes', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    res.json('Get Completed');
});

// POST for notes.html
router.post('/notes', (req,res) => {
    const newnote = req.body;
    newNote.id = uuidv4();
    readAndAppend(newNote,'./db/db.json');
    res.json(newNote);
});

// Delete call
router.delete('/notes/:id', (req,res) => {
    const filteredData = readAndDelete(req.params.id, './db/db.json');
    res.json(filteredData);
})

module.exports = router;
