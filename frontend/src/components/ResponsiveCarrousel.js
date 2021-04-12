import ResponsiveSlide from './ResponsiveSlide'
import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ResponsiveCarrousel = ({carrouselData})=>{
   // console.log(carrouselData)

   var [currentSlide, setCurrent] = useState(0);
   const length = carrouselData.length

   const nextSlide = ()=>{
      setCurrent(currentSlide === length ? 0 : currentSlide +1)
   }
   const previousSlide = ()=>{
      setCurrent(currentSlide === 0 ? length : currentSlide -1 )
   }

// otro
   var [currentSlide1, setCurrent1] = useState(0);
   const length1 = carrouselData.length

   const nextSlide1 = ()=>{
      setCurrent1(currentSlide1 === length1 ? 0 : currentSlide1 +1)
   }
   const previousSlide1 = ()=>{
      setCurrent1(currentSlide1 === 0 ? length1 : currentSlide1 -1 )
   }

// otro
   var [currentSlide2, setCurrent2] = useState(0);
   const length2 = carrouselData.length

   const nextSlide2 = ()=>{
      setCurrent2(currentSlide2 === length2 ? 0 : currentSlide2 +1)
   }
   const previousSlide2 = ()=>{
      setCurrent2(currentSlide2 === 0 ? length2 : currentSlide2 -1 )
   }

   return(
      <div className="responsive-footer-container">
      
         {/* <div className="individual-carrousel"> */}
            <div className="slide-tittle-container">
               <h3 className="slide-tittle">Popular MyTinerarys</h3>
            </div>

            <section className="slider">
               <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
               <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

               {carrouselData[0].map((singleSlide, index)=>{
                  return(
                     <div className={index === currentSlide ? 'slide active': 'slide'} key={index}>
                        {index === currentSlide  && (
                           <ResponsiveSlide singleSlide={singleSlide}  /> 
                           )}
                     </div>
                  )
               })}
            </section>

            <section className="slider">
               <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide1} />
               <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide1}/>

                  {carrouselData[1].map((singleSlide, index)=>{
                     return(
                        <div className={index === currentSlide1 ? 'slide active': 'slide'} key={index}>
                           {index === currentSlide1  && (
                              <ResponsiveSlide singleSlide={singleSlide} /> 
                              )}
                        </div>
                     )
                  })}
            </section>

            <section className="slider">
               <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide2} />
               <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide2}/>

                  {carrouselData[2].map((singleSlide, index)=>{
                     return(
                        <div className={index === currentSlide2 ? 'slide active': 'slide'} key={index}>
                           {index === currentSlide2  && (
                              <ResponsiveSlide singleSlide={singleSlide} /> 
                              )}
                        </div>
                     )
                  })}
            </section>
         {/* </div> */}
      </div>
   )
}

export default ResponsiveCarrousel 