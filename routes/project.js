const { Project, validate } = require('../models/project')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const project = await Project.find().sort('language');
    res.send(project);
});

router.post('/', async (req, res) => {
    let project = new Project({
        name: req.body.name,
        language: req.body.language,
        url: req.body.url
    });
    project = await project.save();
    return res.send(project);
});

router.put('/:id', async (req, res) => {

});

module.exports = router;