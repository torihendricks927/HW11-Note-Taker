const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET for notes.html file
app.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// POST for notes.html
app.post('/api/notes', (req,res) => {
    res.json('post!');
});



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));