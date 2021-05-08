import { Link } from 'react-router-dom'

const CityCard = ({location})=>{
   return (
      <Link style={{textDecoration: 'none', margin: '15px 15px'}} to={`/itineraries/${location._id}`}>
         <div className="cityCard-container" style={{backgroundImage: `url(/img/${location.img})`}}>
            <div className="cityName-container">
               <p className="cityCard-name">{location.cityName}</p>
            </div>
         </div>
      </Link>          
   )  
}
export default CityCard




