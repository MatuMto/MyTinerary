const itinerariesActions = {
   callSingleCity: (id)=>{
      return (dispatch, getState)=>{
         // dispatch({
         //    type: 'CALL_SELECTED_CITY',
         //    payload: id
         //    })
         fetch('http://localhost:4000/api/city/' + id)
         .then(response => response.json())
         .then(data => dispatch({type: 'CALL_SELECTED_CITY', payload: data.respuesta}))
      }
   },

   callSingleCityItinearies: (id)=>{
      return (dispatch, getState)=>{
         fetch('http://localhost:4000/api/itineraries/' + id)
         .then(response => response.json())
         .then(data => dispatch({type: 'CALL_SELECTED_CITY_ITINERARIES', payload: data.respuesta}))
      }
   }
}

export default itinerariesActions 