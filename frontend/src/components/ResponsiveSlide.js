const ResponsiveSlide = ({singleSlide})=>{
   return(
      <>
         <div className="responsive-slide-container">
            <div className="card" style={{
               background: `url(/img/${singleSlide.img})`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: 'cover'
            }}>
               <div className="location-name-container">
                  <p>{singleSlide.location}</p>
               </div>
            </div>

         </div>      
      </>
   )   
}

export default ResponsiveSlide