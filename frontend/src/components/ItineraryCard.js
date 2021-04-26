const ItineraryCard = ({itineraryData})=>{
   const nombre = ['hola', 'hola']
   return(
      <div className="itineraryCard-container">
         <h1>{itineraryData.tittle}</h1>
         <div className="author-img" style={{background: `url(${itineraryData.authorImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
         <p>{itineraryData.authorName}</p>
         <div>
            <p>Price:</p>
            {new Array(itineraryData.price).map(item => <img src="/icons/dolar.png" width="35px" />)}
            {/* <img src="/icons/dolar.png" width="35px" /> */}
                {/* <img src="/icons/dolar.png" width="35px" />  */}
         </div>
         <div>
            <p>Duration:</p>
            <img src="/icons/clock.png" width="35px" />
         </div>
      </div>
   )
}

export default ItineraryCard