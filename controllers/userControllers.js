const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {

   getAllUsers: async(req, res)=>{
      const allUsers = await User.find({})
      res.json({response: allUsers}) 
   },

   registerNewUser: async (req, res)=>{
      const {name, lastName, mail, password, image, country} = req.body
      const existingMail = await User.findOne({mail}) //verifico que no esté registrado el mail que el usuario puso 
      console.log('el valor de existingMail es' + existingMail) //Si es null es porque no encontró uno que coincida, eso significa que va bien

      var response;
      var error;
      var userToSave;

      const hashedPassword = bcryptjs.hashSync(password, 10)

      if(!existingMail){
         try{
            userToSave = new User({name, lastName, mail, password: hashedPassword, image, country})
            await userToSave.save()
            // response = userToSave
            const token = jwt.sign({...userToSave}, process.env.SECRET_OR_KEY)            
            response = token 
            console.log('user to save es: ' +  userToSave)
         } catch (err){ //no pinta mostrar el error posta porque el usuario no lo va a entender 
            console.log(err)
            error = "Hmm looks like something went wrong trying to save your account, please try again"
         }
      } else {
         error = 'Looks like your mail is already registered.. Sign In!'
      }

      // Si está todo bien, error es null, si algo falló entonces response es null xD 
      res.json({
         success: !error ? true : false, 
         response: !existingMail && {token: response, image: userToSave.image, name: userToSave.name, userId: userToSave._id},
         error: error
      })   
   },

   logUser: async(req, res)=>{
      const {mail, password} = req.body   
      var response;
      var error; 

      const accountRegistered = await User.findOne({mail})

      if(accountRegistered){
         const passwordMatches = bcryptjs.compareSync(password, accountRegistered.password)
         console.log('existe la cuenta')
         if(passwordMatches){
            console.log('contraseña correcta')
            const token = jwt.sign({...accountRegistered}, process.env.SECRET_OR_KEY)
            response = token
         } else {
            error = 'Mail or Password incorrect. Try again!'
         }

      } else {
         error = 'Mail or Password incorrect. Try again!'
      }
      res.json({
         success: !error ? true : false,
         response: !error && {token: response, image: accountRegistered.image, name: accountRegistered.name, userId: accountRegistered._id},
         error: error
      })
   },

   forcedLogin: (req, res)=>{
      console.log(req.user._id)
      res.json({success: true, response: {image: req.user.image, name: req.user.name, userId: req.user._id}})
   }

}

module.exports = userControllers