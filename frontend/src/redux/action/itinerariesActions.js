const itinerariesActions = {
   callSingleCity: (id)=>{
      return (dispatch, getState)=>{
         fetch('http://localhost:4000/api/city/' + id)
         .then(response => response.json())
         .then(data => dispatch({type: 'CALL_SINGLE_CITY', payload: data.respuesta}))
         // dispatch({
         //    type: 'CALL_SINGLE_CITY',
         //    payload: console.log('hola')
         // }) 
      }
   }
}

export default itinerariesActions 