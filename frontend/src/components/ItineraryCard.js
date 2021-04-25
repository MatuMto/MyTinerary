const ItineraryCard = ({itineraryData})=>{
   return(
      <div className="itineraryCard-container">
         <h1>{itineraryData.tittle}</h1>
         <div className="author-img" style={{background: `${itineraryData.authorImg}`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
         <p>{itineraryData.authorName}</p>
         <div>
            <p>Price:</p>
            <img src="/icons/dolar.png" width="35px" />
         </div>
         <div>
            <p>Duration:</p>
            <img src="/icons/clock.png" width="35px" />
         </div>
      </div>
   )
}

export default ItineraryCard