import React from 'react'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import HomeMain from '../components/HomeMain'
import ResponsiveCarrousel from '../components/ResponsiveCarrousel'
import CarrouselData from '../components/CarrouselData'

class Home extends React.Component {
   render(){
      return(
         <div>
            <HomeMain/>
            <Carrousel carrouselData={CarrouselData}/>
            <ResponsiveCarrousel carrouselData={CarrouselData} />
            <Footer/>
         </div>
      )
   }
}

export default Home