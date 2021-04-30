// Esto es un middleware - una funcion que se ejecuta antes de llegar al controlador 

const validator = (req, res, next)=>{
   const {name, lastName, mail, password, image, country} = req.body
   var errors = []
   if (name === ''){
      errors.push('Name cant be empty :v')
   }

   if(!mail.includes('@')){
      errors.push('Poneme un mail en serio pa')
   }
   if(password.length < 4){
      errors.push('Passwords must contain at least 4 characters')
   }
   

   if (errors.length === 0){
      next()
   } else {
      res.json({success: false, error: errors})
   }
}

module.exports = validator