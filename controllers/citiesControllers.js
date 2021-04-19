const City = require('../models/City')

const citiesControllers = {
   getAllCities: async (req, res) =>{
      const allCities = await City.find()
      res.json({respuesta: allCities})
   },
 
   addNewCity: async (req, res) =>{
      const {country, cityName, img, description} = req.body
      const cityToSave = new City({cityName: cityName, country: country, description: description, img: img}) //Creo una nueva instancia de mi modelo City 
      await cityToSave.save() //como es una instancia de un modelo, me habilita los metodos que puede realizar un modelo. 
      const allCities = await City.find()
      res.json({respuesta: allCities })
   },

   getSingleCity: async (req, res) =>{
      const id = req.params.id
      const locationSelected = await City.findOne({_id: id})
      res.json({respuesta: locationSelected})
   },

   editCity: async (req, res) =>{
      const id = req.params.id
      const modifiedCity = await City.findOneAndUpdate({_id:id},{...req.body}, {new: true}) // el new true va xq sino no me devuelve el objeto modif.
      res.json({respuesta: modifiedCity})
   },

   deleteCity: async (req, res) =>{
      const id = req.params.id
      await City.findOneAndDelete({_id: id})
      const allCities = await City.find()
      res.json({respuesta: allCities})
   }
}

module.exports = citiesControllers