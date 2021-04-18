const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const router = require('./routes/index')

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

app.use('/api', router) //cuando hagan un pedido x tipo a /api, ejecuta el router - que es la constante definida en routes/index.js





app.listen(4000, () => console.log("estoy escuchando en el puerto 4000"))