import ItineraryTittle from '../components/ItineraryTittle'
import axios from 'axios'
import React from 'react'
import itinerariesActions from '../redux/action/itinerariesActions'
import {connect} from 'react-redux'
import ItineraryCard from '../components/ItineraryCard'
class Itineraries extends React.Component{
   state = {
      loading: true,
   } 

   componentDidMount(){
      const receivedId = this.props.match.params.id
      this.props.callSingleCity(receivedId)
   }
   
   render(){
      return (
         <> 
            {/* Fijarse esto, es para poner el loading, si hay tiempo verlo ----------------------------------------------------- sino a la chola xd */}
            
            {this.props.selectedCity.length === 0 
               ? console.log('está cargando')
               : console.log('ya cargó')}
            
            <ItineraryTittle selectedCity={this.props.selectedCity}/>
            {/* <ItineraryCard itinerary={} /> */}
         </>
      )
   }  
}

const mapStateToProps = (state)=>{
   return {
      selectedCity: state.itineraries.selectedCity
   }
}

const mapDispatchToProps = {
   callSingleCity: itinerariesActions.callSingleCity
}


export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)


