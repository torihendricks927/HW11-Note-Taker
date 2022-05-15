const express = require('express');

// const path = require('path');
const htmlRoute = require('./public/routes/htmlRoute');
const apiRoute = require('./public/routes/apiRoute')
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API route call
// POST for notes.html
app.post('/api/notes', (req,res) => {
    res.json('post!');
});

app.use('/api/notes', (req,res) => {

})




// HTML Route Call
app.use('/', htmlRoute);

// GET for notes.html file
// app.get('/notes', (req,res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'));
// });

// // GET for index.html file
// app.get('*', (req,res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// // GET for notes
// app.get('/api/notes', (req,res) => {
//     res.sendFile
// })


// starts PORT server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));