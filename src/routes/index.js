'use strict';
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('We get places');
});

router.get('*', (req, res) => {
  res.send('How do you fuck this up already');
});

module.exports = router;
