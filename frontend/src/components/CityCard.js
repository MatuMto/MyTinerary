import { Link } from 'react-router-dom'

const CityCard = ({location})=>{
   return (
      <Link style={{textDecoration: 'none',}} to={`/itineraries/${location._id}`}>
         <div className="cityCard-container" style={{background: `url(/img/${location.img})`, margin: '15px 15px', borderRadius: '15px', backgroundPosition: 'center', backgroundSize: 'cover', border: '1px solid black', cursor: 'pointer'}}>
            <div className="cityName-container">
               <p className="cityCard-name">{location.cityName}</p>
            </div>
         </div>
      </Link>          
   )  
}
export default CityCard




