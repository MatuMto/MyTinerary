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
   } 

   componentDidMount(){
      const receivedId = this.props.match.params.id
      this.props.callSingleCity(receivedId)
      this.props.callSingleCityItinearies(receivedId)
   }
   
   render(){
      console.log(this.props)
      // console.log(this.props.selectedCity)
      return (
         <> 
            {/* Fijarse esto, es para poner el loading, si hay tiempo verlo ----------------------------------------------------- sino a la chola xd */}
            
            {this.props.selectedCity.length === 0 
               ? console.log('está cargando')
               : console.log('ya cargó')}
            
            <ItineraryTittle selectedCity={this.props.selectedCity}/>
            {this.props.selectedCityItineraries.length > 0
            ? this.props.selectedCityItineraries.map(itinerary => <ItineraryCard itineraryData={itinerary}/>)
            : <h1>No hay itinerarios aun para esta ciudad</h1>}
            {/* // {this.props.selectedCityItineraries.map(itinerary => <ItineraryCard itineraryData={itinerary}/>)} */}
            <CitiesFooter/>

         </>
      )
   }  
}

const mapStateToProps = (state)=>{
   return {
      selectedCity: state.itineraries.selectedCity,
      selectedCityItineraries: state.itineraries.selectedCityItineraries
   }
}

const mapDispatchToProps = {
   callSingleCity: itinerariesActions.callSingleCity,
   callSingleCityItinearies: itinerariesActions.callSingleCityItinearies
}


export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)


