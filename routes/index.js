const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const validator = require('../config/validator')

router.route('/cities')
.get(validator, citiesControllers.getAllCities) //hago que primero se ejecute el validador - si pasa la prueba, llamo a mi controller
.post(validator, citiesControllers.addNewCity)


router.route('/city/:id')
.get(validator, citiesControllers.getSingleCity)
.put(citiesControllers.editCity)
.delete(validator, citiesControllers.deleteCity)

module.exports = router


