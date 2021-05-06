const Activity = require('../models/Activity')

const activitiesControllers = {
   getAllActivities : async(req, res)=>{
      try {
         var allActivities = await Activity.find()
      }catch (err){
         console.log('Caí en el catch y el error es: ' + err)
      }
      res.json({response: allActivities})
   }, 

   addNewActivity: async(req, res)=>{
      try {
         const {tittle, img, idItinerary} = req.body
         const activityToSave = await new Activity({tittle, img, idItinerary})
         await activityToSave.save()
         var allActivities = await Activity.find()
      }catch (err){
         console.log('Caí en el catch y el error es: '+ err)
      }
         res.json({response: allActivities})
   },

   getSingleItineraryActivities: async(req, res)=> {
      try {
         const id = req.params.id
         var singleCityItineraries = await Activity.find({idItinerary: id})
      }catch(err){
         console.log('Caí en el catch y el error es: ' + err)
      }
      res.json({response: singleCityItineraries})
   },

   editActivity: async(req, res)=>{
      try{ 
         const id = req.params.id
         var modifiedActivity = await Activity.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
      }catch (err){
         console.log('Caí en el catch y el error es: ' + err)
      }
      res.json({response: modifiedActivity})
   },

   deleteActivity: async(req, res)=>{
      try {
         const id = req.params.id
         await Activity.findOneAndDelete({_id: id})
         var allActivities = await Activity.find()
      } catch (err){
         console.log('Caí en el catch y el error es: '+ err)
      }
         res.json({response: allActivities})
   }
}

module.exports = activitiesControllers