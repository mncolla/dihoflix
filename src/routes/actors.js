var express = require('express');
var router = express.Router();
var actorsController = require('../controllers/actorsController')

/* GET home page. */
router.get('/', actorsController.list);
router.get('/detail/:id', actorsController.mostrar);
router.get('/recommended', actorsController.mostrarRecomendados);
router.post('/search', actorsController.search);
router.get('/create', actorsController.create);
router.post('/create', actorsController.store);

module.exports = router;