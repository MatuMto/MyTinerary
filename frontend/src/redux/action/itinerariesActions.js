import axios from 'axios'

const itinerariesActions = {
   callSingleCityItinearies: (id)=>{
      return (dispatch, getState)=>{
         fetch('https://mytinerary-lorenzo.herokuapp.com/api/itineraries/' + id)
         .then(response => response.json())
         .then(data => {
            dispatch({type: 'CALL_SELECTED_CITY_ITINERARIES', payload: data.respuesta})
         })
         .catch(error => console.log(error))
      }
   },

   likeItinerary: (IDs) => {
      return async(dispatch, getState) => {
         const response = await axios.post('https://mytinerary-lorenzo.herokuapp.com/api/likeItinerary', IDs)
         return response
      }
   },

   sendComment: (commentInfo)=>{
      return async(dispatch, getState)=>{
         const response = await axios.post('https://mytinerary-lorenzo.herokuapp.com/api/itinerary/comments', commentInfo)
         return response
      }
   },

   deleteComment: (IDs)=> {
      return async(dispatch, getState)=>{
         const response = await axios.delete('https://mytinerary-lorenzo.herokuapp.com/api/itinerary/comments', {data: IDs}) 
         return response.data.response
      }
   },

   editComment: (itineraryId, commentInfo)=> {
      return async(dispatch, getState)=>{
         const response = await axios.put('https://mytinerary-lorenzo.herokuapp.com/api/itinerary/comments/' + itineraryId, commentInfo )
         return response.data.response
      }
   }

}

export default itinerariesActions 