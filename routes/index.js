const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

info = []

router.Route('/cities')
.get(citiesControllers.getAllCities)
.post(citiesControllers.addNewCity)


router.Route('/city/:id')
.get(citiesControllers.getSingleCity)
.put(citiesControllers.updateCity)
.delete(citiesControllers.deleteCity)

module.exports = router


