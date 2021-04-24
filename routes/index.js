const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesController = require('../controllers/itinerariesController')
const validator = require('../config/validator')
// hago que primero se ejecute el validador - si pasa la prueba, llamo a mi controller

router.route('/cities')
.get(citiesControllers.getAllCities) // obtengo todas las ciudades
.post(citiesControllers.addNewCity) // agrego una ciudad

router.route('/city/:id')
.get(citiesControllers.getSingleCity) //obtengo una ciudad especifica por el id
.put(citiesControllers.editCity) // edito una ciudad
.delete(citiesControllers.deleteCity) // borro una ciudad


router.route('/itineraries')
.get(itinerariesController.getAllItineraries) //recibir todos los itinerarios
.post(itinerariesController.addNewItinerary) // cargar un nuevo itinerario

router.route('/itineraries/:id')
.get(itinerariesController.getSingleCityItineraries) //recibir todos los itinerarios de una ciudad en particular

router.route('/itinerary/:id')
.get(itinerariesController.getSingleItinerary) // obtener un itinerario especifico
.delete(itinerariesController.deleteItinerary) // borrar un itinerario especifico
.put(itinerariesController.editItinerary) //modificar un itinerario especifico

module.exports = router


