const Slide = ({singleSlide})=>{
   return(
      <>
      {console.log(singleSlide[1])}
         <div className="slide-container">
            <div className="card1" style={{
               background: `url(/img/${singleSlide[0].img})`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover'
            }}>
               <div className="location-name-container">
                  <p>{singleSlide[0].location}</p>
               </div>
            </div>

            <div className="card2" style={{
               background: `url(/img/${singleSlide[1].img})`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover'
            }}>
               <div className="location-name-container">
                  <p>{singleSlide[1].location}</p>
               </div>
            </div>

            <div className="card3" style={{
               background: `url(/img/${singleSlide[2].img}) `,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover'
            }}>
               <div className="location-name-container">
                  <p>{singleSlide[2].location}</p>
               </div>
            </div>

            <div className="card4" style={{
               background: `url(/img/${singleSlide[3].img})`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover'
            }}>
               <div className="location-name-container">
                  <p>{singleSlide[3].location}</p>
               </div>
            </div>
         </div>      
      </>
   )   
}

export default Slide