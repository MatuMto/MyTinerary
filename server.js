const express = require('express')
const passport = require('passport')
const cors = require('cors')
const app = express()
require('./config/database') // no es necesario guardarlo en una variable porq solo quiero que se ejecute, no exportarlo 
require('dotenv').config()
const router = require('./routes/index')
require('./config/passport')
const path = require('path')

// Middlewers - funciones que se ejecutan antes de llegar a la ruta
app.use(cors())
app.use(express.json())


//cuando hagan un pedido de x tipo a /api, ejecuta el router - que es la constante definida en routes/index.js
app.use('/api', router)

if(process.env.PRODUCTION === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })
}

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT 

app.listen(port, host, () => console.log("estoy escuchando en el puerto " + port + " on " + host))