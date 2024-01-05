const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

// All paths start with '/skills'



/* This route is a GET request for 
// GET /skills (our index action/functionality - list all skills)*/
router.get('/', skillsCtrl.index);
// GET /skills/new <--Define BEFORE show route
router.get('/new', skillsCtrl.new);
// GET /skills/:id (our show action/functionality, to display or show a single skill)
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);


module.exports = router;
