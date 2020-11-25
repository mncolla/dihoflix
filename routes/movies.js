var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController')

/* GET home page. */
router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.mostrar);
router.get('/new', moviesController.mostrarNuevas);
router.get('/recommended', moviesController.mostrarRecomendadas);
module.exports = router;