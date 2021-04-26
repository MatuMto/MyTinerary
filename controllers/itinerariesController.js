const Itinerary = require('../models/Itinerary')

const itinerariesController = {
   getAllItineraries: async (req, res) =>{
      const allCities = await Itinerary.find()
      res.json({respuesta: allCities})
   },
 
   addNewItinerary: async (req, res) =>{
      const {tittle, authorName, authorImg, price, duration, likes, idCity, hashtags } = req.body
      const itineraryToSave = new Itinerary({tittle, authorName, authorImg,price, duration, likes, idCity, hashtags,}) //Creo una nueva instancia de mi modelo City 
      await itineraryToSave.save() //como es una instancia de un modelo, me habilita los metodos que puede realizar un modelo. 
      const allItineraries = await Itinerary.find()
      res.json({respuesta: allItineraries })
   },

   getSingleCityItineraries: async (req, res) =>{
      const id = req.params.id
      const itinerariesAsked = await Itinerary.find({idCity: id})
      res.json({respuesta: itinerariesAsked})
   },

   getSingleItinerary: async (req, res) =>{
      const id = req.params.id
      const itinerarySelected = await Itinerary.findOne({_id: id})
      res.json({respuesta: itinerarySelected})
   },

   editItinerary: async (req, res) =>{
      const id = req.params.id
      const modifiedItinerary = await Itinerary.findOneAndUpdate({_id:id},{...req.body}, {new: true}) // el new true va xq sino no me devuelve el objeto modif.
      res.json({respuesta: modifiedItinerary})
   },

   deleteItinerary: async (req, res) =>{
      const id = req.params.id
      await Itinerary.findOneAndDelete({_id: id})
      const allItineraries = await Itinerary.find()
      res.json({respuesta: allItineraries})
   }
}

module.exports = itinerariesController