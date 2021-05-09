import axios from 'axios'

// como mi action no puede fetchear, pero necesito hacerlo, voy a convertir esto en una actionCreator
const citiesActions = {
   uploadCities: ()=>{
      return (dispatch, getState)=>{
         fetch('http://localhost:4000/api/cities')
         .then(response => response.json())
         .then(data => dispatch({type: 'CARGAR_CITIES', payload: data.respuesta}))
         .catch(error => console.log(error))
      }
   },

   citiesFilter: (elementoACapturar)=>{
      return(dispatch, getState) =>{
         dispatch({
            type: 'FILTER_FUNCTION',
            payload: elementoACapturar.trim()
         })  
      }
   },

   callSingleCity: (id)=>{
      return async(dispatch, getState)=>{
         const response = await axios.get('http://localhost:4000/api/city/'+ id)
         // console.log(response.data.respuesta)
         return response.data.respuesta
         // dispatch({type: 'GET_SINGLE_CITY', payload: response })
      }
   }


}

export default citiesActions 