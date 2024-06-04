var express = require('express');
var router = express.Router();
const { createCar, fetchAllCars } = require('../controllers/controller');

router.post('/', createCar);
router.get('/', fetchAllCars);

module.exports = router;
