const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const info = [
      {location: 'Buenos Aires', id: 1, img:'buenos-aires.jpg'},
      {location: 'Rio de Janeiro', id: 2, img:'rio-de-janeiro.jpg'},
      {location: 'Estocolmo', id: 3,  img:'estocolmo.jpeg'},
      {location: 'Amsterdam', id: 4,  img:'amsterdam.jpg'},
      {location: 'Paris', id: 5, img:  'paris.jpg'},
      {location: 'Rome', id: 6, img:  'rome.jpg'},
      {location: 'Helsinki', id: 7, img:  'helsinki.jpg'},
      {location: 'Berna',id: 8, img:  'berna.jpg'},
      {location: 'Madrid', id: 9, img:  'madrid.jpg'},
      {location: 'Oslo', id: 10, img:  'oslo.jpg'},
      {location: 'Copenhague', id: 11, img:  'copenhague.jpg'},
      {location: 'Wellington', id: 12, img:  'wellington.jpg'},
      {location: 'New York', country:'United States', id: 13, img:'new-york.jpg'},
      {location: 'Miami', country:'United States', id: 14, img:'miami.jpg'},
      {location: 'Dubai', country:'United Arab Emirates', id: 15, img:  'monaco.jpg'},
      {location: 'Tokyo', country:'Japan', id:16, img:  'tokyo.jpg'},
]

app.get('/api/cities', (req, res) =>{
   res.json({respuesta: info, success: true})
})

app.delete('/api/allCities', (req, res) =>{
      
      // res.json({respuesta: 'borre todo'})
})

app.listen(4000, () => console.log("estoy escuchando en el puerto 4000"))