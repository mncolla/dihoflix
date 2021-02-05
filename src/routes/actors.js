var express = require('express');
var router = express.Router();
var actorsController = require('../controllers/actorsController')
var actorValidator = require('../middlewares/actorValidator');

/* GET home page. */
router.get('/', actorsController.list);
router.get('/detail/:id', actorsController.mostrar);
router.get('/recommended', actorsController.mostrarRecomendados);
router.post('/search', actorsController.search);
router.get('/create', actorsController.create);
router.post('/create', actorsController.store);
router.delete('/delete/:id', actorsController.delete);
router.get('/edit/:id',actorsController.edit);
router.put('/edit/:id',actorValidator.actor,actorsController.actualize);
module.exports = router;