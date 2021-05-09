const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesController = require('../controllers/itinerariesController')
const userControllers = require('../controllers/userControllers')
const activitiesControllers = require('../controllers/activitiesController')
const validator = require('../config/validator')
const passport = require('passport')
const { get } = require('mongoose')
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
// .delete(itinerariesController.deleteItinerary) // borrar un itinerario especifico
.put(itinerariesController.editItinerary) //modificar un itinerario especifico

router.route('/likeItinerary')
.post(itinerariesController.likeItinerary) //Ver si por ahi podria poner esta ruta como un post en el router de arriba

router.route('/itinerary/comments')
.post(itinerariesController.addNewComment)
.delete(itinerariesController.deleteComment)

router.route('/itinerary/comments/:id')
.get(itinerariesController.getAllComments)

router.route('/itinerary/comments/:id')
.put(itinerariesController.editComment)


router.route('/user/signUp')
.post(validator, userControllers.registerNewUser)

router.route('/user/signIn')
.post(userControllers.logUser)

router.route('/user/loginLS')
.get(passport.authenticate('jwt', {session: false}), userControllers.forcedLogin)
// Primero ejecuto el validador de passport, y despues llamo a mi userControllers. 
// Passport sirve para verificar que tengo un token verdadero


router.route('/activities')
.get(activitiesControllers.getAllActivities)
.post(activitiesControllers.addNewActivity)

router.route('/activities/:id')
.get(activitiesControllers.getSingleItineraryActivities)

router.route('/activity/:id')
.delete(activitiesControllers.deleteActivity)
.put(activitiesControllers.editActivity)

module.exports = router


