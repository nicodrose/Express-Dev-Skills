const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

// All paths start with '/skills'



/* This route is a GET request for 
// GET /skills (our index action/functionality - list all skills)*/
router.get('/', skillsCtrl.index);
// GET /skills/:id (our show action/functionality, to display or show a single skill)
router.get('/:id', skillsCtrl.show);

module.exports = router;
