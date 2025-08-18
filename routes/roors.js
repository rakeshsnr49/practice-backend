const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Roots route working!');
});

module.exports = router;
