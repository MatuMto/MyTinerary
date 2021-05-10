import React from 'react'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import HomeMain from '../components/HomeMain'
import ResponsiveCarrousel from '../components/ResponsiveCarrousel'
import CarrouselData from '../components/CarrouselData'
import axios from 'axios'
import LoadingAnimation from '../components/LoadingAnimation'
import CitiesFooter from '../components/CitiesFooter'

class Home extends React.Component {

   state = {
      infoOfCities: [],
      loading: true
   }

   componentDidMount(){
      axios.get('http://localhost:4000/api/allCities')
      .then(response => this.setState({infoOfCities: response.data.respuesta, loading: false}))
   }

   render(){
      if(this.state.loading){
         <LoadingAnimation/>
      }
      return(
         <div>
            <HomeMain/>
            <Carrousel carrouselData={CarrouselData}/>
            <ResponsiveCarrousel carrouselData={CarrouselData} />
            <CitiesFooter/>
            {/* <Footer/> */}
         </div>
      )
   }
}

export default Home