const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/projects', { useNewUrlParser: true })
    .then(() => console.log('Connected to db...'))
    .catch( err => console.error('Error connecting to db...'));


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}`));