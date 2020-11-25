var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController')

/* GET home page. */
router.get('/', moviesController.list);

module.exports = router;