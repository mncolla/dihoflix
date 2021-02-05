var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController');
var movieValidator = require('../middlewares/movieValidator');

/* GET home page. */
router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.mostrar);
router.get('/new', moviesController.mostrarNuevas);
router.get('/recommended', moviesController.mostrarRecomendadas);
router.post('/search', moviesController.search);
router.get('/create', moviesController.create);
router.post('/create', movieValidator.movie ,moviesController.store);
router.get('/edit/:id', moviesController.edit);
router.put('/edit/:id', movieValidator.movie  ,moviesController.actualize);
router.delete('/delete/:id', moviesController.delete);

module.exports = router;