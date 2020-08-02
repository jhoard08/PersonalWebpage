const {Program, validate} = require('../models/program')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const program = await Program.find().sort('language');
    res.send(program);
})