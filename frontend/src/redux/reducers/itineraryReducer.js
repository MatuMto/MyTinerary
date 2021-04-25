const initialState = {
   selectedCity: [],
   selectedCityItineraries: [],
}

const itinerariesReducer = (state = initialState, action) =>{
   switch (action.type){
      case 'CALL_SELECTED_CITY':
         return {
            ...state,
            // selectedCity: state.allCities.find(city => city._id === action.payload)
            selectedCity: action.payload
         }
      break

      case 'CALL_SELECTED_CITY_ITINERARIES':
         return {
            ...state,
            selectedCityItineraries: action.payload
         }
      break

      default:
         return state
   }
}

export default itinerariesReducer