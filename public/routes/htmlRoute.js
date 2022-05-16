const path = require('path');
// Modular route
const router = require('express').Router();

// Moved to new route module for homework requirements
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './notes.html'));
});

// To return or start homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

module.exports = router;