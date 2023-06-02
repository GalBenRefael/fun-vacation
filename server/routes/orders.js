var express = require('express');
var router = express.Router();
const orders = require('../controllers/orders');

router.post('/', orders.add);

module.exports = router;