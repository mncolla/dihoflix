var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController')

/* GET home page. */
router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.mostrar);

module.exports = router;