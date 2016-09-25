'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({
    message: 'woo'
  });
});

router.get('/users', (req, res) => {
  let results = schema.find();
  console.log(results)
  res.send({
    message: 'boo'
  });
});
module.exports = router;
