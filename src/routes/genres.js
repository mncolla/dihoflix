var express = require('express');
var router = express.Router();
var genresController = require('../controllers/genresController')

/* GET home page. */
router.get('/', genresController.list);
router.get('/detail/:id', genresController.mostrar);

module.exports = router;