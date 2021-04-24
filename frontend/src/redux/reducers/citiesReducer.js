const initialState = {
   allCities: [],
   citiesFilter: []
}

const citiesReducer = (state = initialState, action)=>{
   switch (action.type){
      case 'CARGAR_CITIES':
         return {
            ...state, 
            allCities: action.payload,
            citiesFilter: action.payload
         }
         break

      case 'FILTER_FUNCTION':
      const value = action.payload  
            return{
               ...state, 
               citiesFilter: state.allCities.filter((city) => {
                  return city.cityName.toLowerCase().slice(0, value.length) === value.toLowerCase()
               })  
            }           
         break    
      
         default: 
            return state
   }
}

export default citiesReducer