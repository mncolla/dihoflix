var express = require('express');
var router = express.Router();
let mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index);
router.get('/actuacion', mainController.actuacion);
router.post('/actuacion', mainController.asignar);


module.exports = router;
