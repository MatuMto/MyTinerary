const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/index')
require('./config/database') // no es necesario guardarlo en una variable porq solo quiero que se ejecute, no exportarlo 

// Middlewers - funciones que se ejecutan antes de llegar a la ruta
app.use(cors())
app.use(express.json())


//cuando hagan un pedido de x tipo a /api, ejecuta el router - que es la constante definida en routes/index.js
app.use('/api', router)


app.listen(4000, () => console.log("estoy escuchando en el puerto 4000"))