var express = require('express');
var router = express.Router();
const resultsController = require('../controllers/resultsController');

router.get('/:n1/:n2', resultsController.sum);

router.post('/:n1/:n2', resultsController.multiplication);

router.put('/:n1/:n2', resultsController.divide);

router.delete('/:n1/:n2', resultsController.substraction);

module.exports = router;