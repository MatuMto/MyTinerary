import { useEffect, NavLink } from "react-router-dom"

const ItineraryTittle = ({selectedCity})=>{
   // console.log(selectedCity)


   console.log(selectedCity)
   return(
      <p>
         <NavLink to="/">home</NavLink>
         <div>
         <div >
               <p>Location: {selectedCity.cityName}</p>
               <p>Country: {selectedCity.country}</p>
               <p >Description: {selectedCity.description}</p>
            </div>
            <div style={{width: '300px', height:'400px', background: `url(/img/${selectedCity.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>

            {/* <h2>Welcome to {selectedCity.cityName}'s Itinerary!</h2> */}
            {/* <h2>Country: {selectedCity.country}</h2> */}
            {/* <p>Description: {selectedCity.description}</p> */}
            {/* <div style={{width: '400px', height: '400px', background: `url('/img/${selectedCity.img}')`, backgroundRepeat: 'no-repeat'}}></div> */}
         </div>
         <p>Site under construction</p>
      </p>
      ) 
}

export default ItineraryTittle