import axios from 'axios'

const itinerariesActions = {
   callSingleCityItinearies: (id)=>{
      return (dispatch, getState)=>{
         fetch('http://localhost:4000/api/itineraries/' + id)
         .then(response => response.json())
         .then(data => {
            // console.log(data)
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
         console.log(commentInfo)
         console.log('llego al action de send comment')
         const response = await axios.post('http://localhost:4000/api/itinerary/comments', commentInfo)
         return response
      }
   },

   deleteComment: (IDs)=> {
      return async(dispatch, getState)=>{
         // console.log(itineraryId)
         // console.log(commentId)
         // console.log(IDs)
         const response = await axios.delete('http://localhost:4000/api/itinerary/comments', {data: IDs}) 
         console.log(response.data.response)
         return response.data.response
      }
   },

   editComment: (itineraryId, commentInfo)=> {
      return async(dispatch, getState)=>{
         // console.log(itineraryId)
         // console.log(commentInfo)
         const response = await axios.put('http://localhost:4000/api/itinerary/comments/' + itineraryId, commentInfo )
         console.log(response.data.response)
      }
   }

}

export default itinerariesActions 