import { NavLink } from "react-router-dom"
import CitiesHeader from "../components/CitiesHeader"

const ItineraryTittle = ({selectedCity})=>{

   return(
      <>
         <CitiesHeader/>

         <div className="itinerary-tittle-container" style={{backgroundImage: `url(/img/${selectedCity.img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="itinerary-tittle-text-container">
               <p className="welcome-to-itinerary"  >Welcome to {selectedCity.cityName}, {selectedCity.country}! </p>
            </div>
         </div>

         <div className="backToCities-button-container" >
            <NavLink to="/cities" className="ClickHere-button-text">Back to Cities! <img src="/icons/paper-plane.png" alt="plane icon should be here xD" className="plane-icon" style={{width:'30px' }} /> </NavLink>
         </div>
      </>
      ) 
}

export default ItineraryTittle