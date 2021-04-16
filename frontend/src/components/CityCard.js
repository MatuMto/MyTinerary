import {NavLink} from 'react-router-dom'

const CityCard = ({location})=>{

   const identificador = (e)=>{
      const identificado = e.target.dataset.cityName
      console.log(identificado)
   }

   return(
      <NavLink style={{textDecoration: 'none'}} to={`/itineraries/${location.id}`}>
         <div style={{display: 'flex', justifyContent: 'space-between', width: '650px', border: '2px solid black', cursor: 'pointer'}} onClick={identificador}>
            <div >
               <p>Location: {location.cityName}</p>
               <p>Country: {location.country}</p>
               <p >id:{location.id}</p>
            </div>
            <div style={{width: '300px', height:'400px', background: `url(/img/${location.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
         </div>
      </NavLink>          
   )  

}
export default CityCard






// array.map(()=>{
//    return 
// })