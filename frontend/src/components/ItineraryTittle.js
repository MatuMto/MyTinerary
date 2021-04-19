import { useEffect, NavLink } from "react-router-dom"

const ItineraryTittle = ({selectedCity})=>{
   // console.log(selectedCity)


   console.log('pepe')
   return(
      <>
         <NavLink to="/">home</NavLink>
         <div>
            <div >
               <p>Location: {selectedCity.cityName}</p>
               <p>Country: {selectedCity.country}</p>
               <p >Description: {selectedCity.description}</p>
            </div>
         </div>
         <p>Site under construction</p>
         <NavLink to="/cities">Back to Cities </NavLink> 
      </>
      ) 
}

export default ItineraryTittle