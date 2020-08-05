const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


router.get('/', async (req, res) => {
  return res.render('contact', { message: 'COMING SOON' })
});

module.exports = router;