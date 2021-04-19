import { NavLink } from "react-router-dom"
import CitiesHeader from "../components/CitiesHeader"
import CitiesFooter from "./CitiesFooter"

const ItineraryTittle = ({selectedCity})=>{

   return(
      <>
         <CitiesHeader/>

         <div className="itinerary-tittle-container" style={{background: `url(/img/${selectedCity.img})`}}>
            <div className="itinerary-tittle-text-container">
               <p className="welcome-to-itinerary"  >Welcome to {selectedCity.cityName}, {selectedCity.country}! </p>
            </div>
         </div>

         <div className="backToCities-button-container" >
            <NavLink to="/cities" className="ClickHere-button-text">Back to Cities! <img src="/icons/paper-plane.png" alt="plane icon should be here xD" className="plane-icon" style={{width:'30px' }} /> </NavLink>
         </div>

         <div className="site-under-construction-container">
            <img src="/img/site-under-construction.jpg" alt="This page still under construction" className="underConstruction-image"  />
         </div>

         <CitiesFooter/>
      </>
      ) 
}

export default ItineraryTittle