import Slide from './Slide'
import {useState} from 'react'
import Carousel from 'react-elastic-carousel';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carrousel = ({carrouselData})=>{
   var [currentSlide, setCurrent] = useState(0);
   const length = carrouselData.length
   console.log(carrouselData)

   const nextSlide = ()=>{
      setCurrent(currentSlide === length - 1 ? 0 : currentSlide +1)
   }
   const previousSlide = ()=>{
      setCurrent(currentSlide === 0 ? length-1 : currentSlide -1 )
   }

   return (
      <>
            <div className="slide-tittle-container">
               <h3 className="slide-tittle">Popular MyTineraries</h3>
            </div>
         <div className="complete-carrousel">


            <section className="slider">
               <Carousel itemsToShow={1}>
                  {carrouselData.map(array => <Slide singleSlide={array} />)}
               </Carousel>
            </section>


               {/* <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
               <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

               {carrouselData.map((singleSlide, index)=>{
                  return(
                     <div className={index === currentSlide ? 'slide active': 'slide'} key={index}>
                        {index === currentSlide  && (
                           <Slide singleSlide={singleSlide} currentSlide={currentSlide}  /> 
                           )}
                     </div>
                  )
                  })} */}
         </div>
      </>
   )
}
export default Carrousel