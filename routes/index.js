const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const validator = require('../config/validator')

router.route('/cities')
.get(citiesControllers.getAllCities) //hago que primero se ejecute el validador - si pasa la prueba, llamo a mi controller
.post(citiesControllers.addNewCity)


router.route('/city/:id')
.get(citiesControllers.getSingleCity)
.put(citiesControllers.editCity)
.delete(citiesControllers.deleteCity)

module.exports = router


