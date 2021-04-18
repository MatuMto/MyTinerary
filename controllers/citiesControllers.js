var info = []

const citiesControllers = {
   getAllCities: (req, res) =>{
      res.json({respuesta: info, success: true})
   },
 
   addNewCity: (req, res) =>{
      const body = req.body 
      info.push(body)
      res.json({mensaje: "se agregó una ciudad con exito"})
   },

   getSingleCity: (req, res) =>{
      const id = parseInt(req.params.id)
      locationSelected = info.find(city => city.id === id)
      res.json({respuesta: locationSelected})
   },

   updateCity: (req, res) =>{
      const id = parseInt(req.params.id)
      info = info.map(city=>{
            if(city.id === id){
                  city = {...city, ...req.body}
            }
            return city
      })
      res.json({respuesta: info})
   },

   deleteCity: (req, res) =>{
      const id = parseInt(req.params.id)
      info = info.filter((city)=>{
            return city.id !== id
      })
      res.json({respuesta: info})
   }
}

module.exports = citiesControllers