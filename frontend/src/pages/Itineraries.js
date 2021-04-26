import ItineraryTittle from '../components/ItineraryTittle'
import React from 'react'
import itinerariesActions from '../redux/action/itinerariesActions'
import {connect} from 'react-redux'
import ItineraryCard from '../components/ItineraryCard'
import CitiesFooter from '../components/CitiesFooter'
import {NavLink} from 'react-router-dom'
class Itineraries extends React.Component{
   state = {
      selectedCity: {}
   } 

   componentDidMount(){
      const receivedId = this.props.match.params.id
      this.setState({selectedCity: this.props.allCities.find(city => city._id === receivedId)})
      this.props.callSingleCityItinearies(receivedId)
   }
   
   render(){
      return (
         <>             
            <ItineraryTittle selectedCity={this.state.selectedCity}/>
            
            {/* Si encontró itinerarios que los muestre */}
            {this.props.selectedCityItineraries.length > 0
               ? this.props.selectedCityItineraries.map(itinerary => <ItineraryCard itineraryData={itinerary} key={itinerary._id} />)
               : <h1 style={{textAlign: 'center', background: 'white', padding: '100px', borderRadius: '50px'}}>We're still working on this city's Itineraries!</h1>}
            
            <div className="linkToHome-container">
               <NavLink className="link-to-home" to="/cities">Back to Cities</NavLink>
            </div>
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


