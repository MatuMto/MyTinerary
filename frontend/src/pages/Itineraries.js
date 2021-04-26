import ItineraryTittle from '../components/ItineraryTittle'
import axios from 'axios'
import React from 'react'
import itinerariesActions from '../redux/action/itinerariesActions'
import {connect} from 'react-redux'
import ItineraryCard from '../components/ItineraryCard'
import CitiesFooter from '../components/CitiesFooter'
class Itineraries extends React.Component{
   state = {
      loading: true,
      selectedCity: {}
   } 

   componentDidMount(){
      const receivedId = this.props.match.params.id
      this.props.callSingleCityItinearies(receivedId)
      this.setState({selectedCity: this.props.allCities.find(city => city._id === receivedId)})
   }
   
   render(){
      console.log(this.props.allCities)
      console.log(this.state.selectedCity)
      return (
         <> 
            {/* Fijarse esto, es para poner el loading, si hay tiempo verlo ----------------------------------------------------- sino a la chola xd */}
            

            <ItineraryTittle selectedCity={this.state.selectedCity}/>
            
            {this.props.selectedCityItineraries.length > 0
               ? this.props.selectedCityItineraries.map(itinerary => <ItineraryCard itineraryData={itinerary}/>)
               : <h1>No hay itinerarios aun para esta ciudad</h1>}

            <CitiesFooter/>

         </>
      )
   }  
}

const mapStateToProps = (state)=>{
   return {
      allCities: state.cities.allCities,
      selectedCityItineraries: state.itineraries.selectedCityItineraries
   }
}

const mapDispatchToProps = {
   callSingleCityItinearies: itinerariesActions.callSingleCityItinearies
}


export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)


