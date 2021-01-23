var express = require('express');
var router = express.Router();
var actorsController = require('../controllers/actorsController')

/* GET home page. */
router.get('/', actorsController.list);
/*router.get('/detail/:id', actorsController.mostrar);
router.get('/new', actorsController.mostrarNuevas);
router.get('/recommended', actorsController.mostrarRecomendadas);
router.post('/search', actorsController.search);
*/
module.exports = router;