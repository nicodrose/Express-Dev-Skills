var express = require('express');
var router = express.Router();

//* This is a GET request to the root route; GET / (root / landing page) */
// Change line 7 title from 'Express' to 'Express Dev Skills'
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Dev Skills' });
});

module.exports = router;
