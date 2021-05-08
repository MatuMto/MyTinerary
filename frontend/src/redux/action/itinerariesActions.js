import axios from 'axios'

const itinerariesActions = {
   callSingleCityItinearies: (id)=>{
      return (dispatch, getState)=>{
         fetch('http://localhost:4000/api/itineraries/' + id)
         .then(response => response.json())
         .then(data => {
            console.log(data)
            dispatch({type: 'CALL_SELECTED_CITY_ITINERARIES', payload: data.respuesta})
         })
         .catch(error => console.log(error))
         // console.log(data)
      }
   },

   
   likeItinerary: (IDs) => {
      return async(dispatch, getState) => {
         const response = await axios.post('http://localhost:4000/api/likeItinerary', IDs)
         return response
      }
   },

   sendComment: (commentInfo)=>{
      return async(dispatch, getState)=>{
         const response = await axios.post('http://localhost:4000/api/itinerary/comment', commentInfo)
         return response
      }
   }
}

export default itinerariesActions 