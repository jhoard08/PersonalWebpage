const express = require('express');
const app = express();
const mongoose = require('mongoose');
const project = require('./routes/project')
const home = require('./routes/index');
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/JakeHoard', { useNewUrlParser: true })
    .then(() => console.log('Connected to db...'))
    .catch(err => console.error('Error connecting to db...'));

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use('/', home);
app.use('/projects', project);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));