const path = require('path');
const router = require('express').Router();

// GET call
router.get('/notes', (req,res) => {
    res.json('Get Completed');
});

// POST for notes.html
router.post('/notes', (req,res) => {
    res.json('Post Completed');
});



module.exports = router;
