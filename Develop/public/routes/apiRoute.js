const path = require('path');
const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');


// GET call
router.get('/notes', (req,res) => {
    res.json('Get Completed');
});

// POST for notes.html
router.post('/notes', (req,res) => {
    const newnote = req.body;
    newNote.id = uuidv4();
    readAndAppend(newNote,'./db/db.json');
});



module.exports = router;
