import { useEffect, NavLink } from "react-router-dom"

const ItineraryTittle = ({receivedId})=>{
   // console.log(selectedCity)


   return(
      
      <>
         <NavLink to="/">home</NavLink>
         <h2>Welcome to {receivedId}'s Itinerary!</h2>
         <p>Site under construction</p>
      </>
      ) 
}

export default ItineraryTittle