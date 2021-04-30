const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userControllers = {
   registerNewUser: async (req, res)=>{
      const {name, lastName, mail, password, image, country} = req.body
      const existingMail = await User.findOne({mail}) //verifico que no esté registrado el mail que el usuario puso 
      console.log('el valor de existingMail es' + existingMail)
      
      var response;
      var error;

      const hashedPassword = bcryptjs.hashSync(password, 10)

      if(!existingMail){
         try{
            const userToSave = new User({name, lastName, mail, password: hashedPassword, image, country})
            await userToSave.save()
            response = userToSave
         } catch (err){ //no pinta mostrar el error posta porque el usuario no lo va a entender 
            error = "Hmm looks like something went wrong trying to save your account, please try again"
         }
      } else {
         error = 'Bro, el mail que pusiste ya está en uso :v'
      }

      // Si está todo bien, error es null, si algo falló entonces response es null xD 
      res.json({
         success: !error ? true : false, 
         response: response,
         error: error
      })   
   },

   logUser: async(req, res)=>{
      const {mail, password} = req.body
      var respuesta;
      var error; 

      const accountRegistered = await User.findOne({mail})
      
      if(accountRegistered){
         const passwordMatches = bcryptjs.compareSync(password, accountRegistered.password)
         if(passwordMatches){
            res.json({success: true, response: accountRegistered})
         } else {
            res.json({success: false, response: 'Mail or Password Incorrect, please try again' })
         }

      } else {
         res.json({success: false, error: 'Mail or Password incorrect, please try again'})
      }

      // res.json("El controllador de Log User esta andando flama")
   } 
}

module.exports = userControllers