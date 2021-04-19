import Slide from './Slide'
import Carousel from 'react-elastic-carousel';
const Carrousel = ({carrouselData})=>{



   return (
      <>
         <div className="slide-tittle-container">
            <h3 className="slide-tittle">Popular MyTineraries</h3>
         </div>

         <div className="complete-carrousel">
            <section className="slider">
               <Carousel enableAutoPlay autoPlaySpeed={5000}>
                  {carrouselData.map(array => <Slide singleSlide={array} />)}
               </Carousel>
            </section>
         </div>
      </>
   )
}
export default Carrousel