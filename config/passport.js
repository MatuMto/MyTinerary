const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy //El poli Ccn que estrategia va a leer el token
const extractJwt = require('passport-jwt').ExtractJwt //El poli de donde va a sacar el token
const User = require('../models/User')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
}, (payload, done)=> {
    User.findById(payload._doc._id) //Busco en la base de datos que haya un usuario que tenga el id que estoy buscando para mi validacion 
    .then(user => {
        if (!user){ //si el usuario es null
            return done(null, false) //No obtuve error y no obtuve usuario
        } else {
            return done(null, user) //No tuve error y tuve un usuario
        }
    } )
    .catch(error => {
        return done(error, user) // Obtuve un error y no obtuve ningun usuario 
    })
} ))