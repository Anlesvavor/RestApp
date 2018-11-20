var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');
const { check, body, params} = require('express-validator/check');


router.post('/', productsController.create);

/* GET products listing.*/

router.get('/blank' ,productsController.blank);

router.get('/:page?', productsController.list);

/*
router.get('/show/:id', productsController.index);

router.put('/:id', productsController.update);

router.delete('/:id', productsController.destroy);
*/


module.exports = router;
