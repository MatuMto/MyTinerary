const itinerariesActions = {
   callSingleCityItinearies: (id)=>{
      return (dispatch, getState)=>{
         fetch('http://localhost:4000/api/itineraries/' + id)
         .then(response => response.json())
         .then(data => dispatch({type: 'CALL_SELECTED_CITY_ITINERARIES', payload: data.respuesta}))
         .catch(error => console.log(error))
      }
   }
}

export default itinerariesActions 