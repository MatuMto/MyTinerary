// Esto es un middleware - una funcion que se ejecuta antes de llegar al controlador 
const joi = require('joi')

const validator = (req, res, next)=>{
      // El Schema
   const schema = joi.object({
      name: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
      lastName: joi.string().trim().required(),
      mail: joi.string().trim().required().email(),
      password: joi.string().min(4).trim().required().pattern(new RegExp('[a-zA-Z0-9]$')),
      image: joi.string().required().trim(),
      country: joi.required()
   })

   //  La verificación 
   const validation = schema.validate(req.body, {abortEarly: false}) //o por ahi tiene que ser true   
   console.log(validation)
   // Si hay algun error, el validator me guarda dentro de validator.error un array con los errores que ocurrieron
   if (validation.error){
      return res.json({success: false, errors: validation.error})
   }
   next()
   //  La respuesta o next 


}

module.exports = validator