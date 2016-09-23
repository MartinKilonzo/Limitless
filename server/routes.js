'use strict';
const router = require('express').Router();
router.get('/', (req, res) => {
  res.send({
    message: 'woo'
  });
});
module.exports = router;
