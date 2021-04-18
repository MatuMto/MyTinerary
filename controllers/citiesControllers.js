const City = require('../models/City')

const citiesControllers = {
   getAllCities: async (req, res) =>{
      const allCities = await City.find()
      // console.log(allCities)
      res.json({respuesta: allCities, sucess:true})
   },
 
   addNewCity: async (req, res) =>{
      // const body = req.body 
      const {country, cityName, img} = req.body
      const cityToSave = new City({cityName: cityName, country: country, img: img}) //Creo una nueva instancia de mi modelo City 
      await cityToSave.save() //como es una instancia de un modelo, me habilita los metodos que puede realizar cada modelo. 
      const allCities = await City.find()
      res.json({respuesta: allCities })
      // info.push(body)
   },

   getSingleCity: async (req, res) =>{
      const id = req.params.id
      const locationSelected = await City.findOne({_id: id})
      res.json({respuesta: locationSelected})
   },

   editCity: async (req, res) =>{
      const id = req.params.id
      await City.findOneAndUpdate({_id:id},{...req.body})
      const allCities = await City.find()
      // info = info.map(city=>{
      //       if(city.id === id){
      //             city = {...city, ...req.body}
      //       }
      //       return city
      // })

      res.json({respuesta: allCities})
   },

   deleteCity: async (req, res) =>{
      const id = req.params.id
      await City.findOneAndDelete({_id: id})
      const allCities = await City.find()
      res.json({respuesta: allCities})
   }
}

module.exports = citiesControllers