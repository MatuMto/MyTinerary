const initialState = {
   selectedCity: ''
   
}

const itinerariesReducer = (state = initialState, action) =>{
   switch (action.type){
      case 'CALL_SINGLE_CITY':
         return {
            ...state,
            selectedCity: action.payload
         }
      break

      default:
         return state
   }
}

export default itinerariesReducer