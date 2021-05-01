// Esto es un middleware - una funcion que se ejecuta antes de llegar al controlador 
const joi = require('joi')

const validator = (req, res, next)=>{
      // El Schema
   const schema = joi.object({
      name: joi.string().trim().min(2).max(20).required(),
      lastName: joi.string().trim().required(),
      mail: joi.string().trim().required().email(),
      password: joi.string().min(5).trim().required().pattern(new RegExp('[a-zA-Z0-9]')),
      image: joi.string().required().trim(),
      country: joi.required()
   })

   //  La verificación 
   const validation = schema.validate(req.body, {abortEarly: false}) //o por ahi tiene que ser true   
   console.log(validation)
   //  La respuesta o next 


}

module.exports = validator