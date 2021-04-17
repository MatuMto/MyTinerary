const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

var info = [
      {cityName: 'Buenos Aires', country:'Argentina',  description: 'This is Argentina Description', id: 1, img:'buenos-aires.jpg'},
      {cityName: 'Rio de Janeiro', country:'Brazil', description: 'This is Brazil Description', id: 2, img:'rio-de-janeiro.jpg'},
      {cityName: 'Stockholm', country:'Sweden', description: 'This is Sweden Description', id: 3,  img:'estocolmo.jpeg'},
      {cityName: 'Amsterdam', country:'Netherlands', description: 'This is Netherlands Description', id: 4,  img:'amsterdam.jpg'},
      {cityName: 'Paris', country:'France', description: 'This is France Description', id: 5, img:  'paris.jpg'},
      {cityName: 'Rome', country:'Italy', description: 'This is Italy Description', id: 6, img:  'rome.jpg'},
      {cityName: 'Helsinki', country:'Finland', description: 'This is Finland Description', id: 7, img:  'helsinki.jpg'},
      {cityName: 'Berna', country:'Switzerland', description: 'This is Switzerland Description', id: 8, img:  'berna.jpg'},
      {cityName: 'Madrid', country:'Spain', description: 'This is Spain Description', id: 9, img:  'madrid.jpg'},
      {cityName: 'Oslo', country:'Norway', description: 'This is Norway Description', id: 10, img:  'oslo.jpg'},
      {cityName: 'Copenhagen', country:'Denmark', description: 'This is Denmak Description', id: 11, img:  'copenhague.jpg'},
      {cityName: 'Wellington', country:'New Zealand', description: 'This is New Zealand Description', id: 12, img:  'wellington.jpg'},
      {cityName: 'New York', country:'United States', description: 'This is United States Description', id: 13, img:'new-york.jpg'},
      {cityName: 'Miami', country:'United States', description: 'This is United States Description', id: 14, img:'miami.jpg'},
      {cityName: 'Dubai', country:'United Arab Emirates', description: 'This is United Araba Emirates Description', id: 15, img:  'monaco.jpg'},
      {cityName: 'Tokyo', country:'Japan', description: 'This is Japan Description', id:16, img:  'tokyo.jpg'},
]

// Obtener Todas las ciudades
app.get('/api/cities', (req, res) =>{
   res.json({respuesta: info, success: true})
})

// Obtener Ciudad especifica por su id
app.get('/api/itineraries/:receivedId', (req, res) =>{
      const receivedId = parseInt(req.params.receivedId)
      // locationSelected = info.filter((city)=> city.id === receivedId)
      locationSelected = info.find(city => city.id === receivedId)
      res.json({respuesta: locationSelected})
})


// Agregar ciudad a la base de datos - VER BIEN ESTA
app.post('/api/addCity', (req, res) =>{
      // const body = req.body
      info.push({
            // body: 
            id: info[info.length - 1].id +1
      })
      res.json({respuesta: info})
})

// Modificar una Ciudad (que identifico segun su id)
app.put('/api/modificar/:idAModificar', (req, res) =>{
      const idAModificar = parseInt(req.params.idAModificar)
      info = info.map(city=>{
            if(city.id === idAModificar){
                  city = {...city, ...req.body}
            }
            return city
      })
      res.json({respuesta: info})
})

// Borrar una ciudad (que identifico segun su id)
app.delete('/api/borrar/:idABorrar', (req, res) =>{
      const idABorrar = parseInt(req.params.idABorrar)
      info = info.filter((city)=>{
            return city.id !== idABorrar
      })
      res.json({respuesta: info})
})


app.listen(4000, () => console.log("estoy escuchando en el puerto 4000"))