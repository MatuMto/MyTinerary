import ItineraryTittle from '../components/ItineraryTittle'
import axios from 'axios'
import React from 'react'

// const Itineraries = (props)=>{
class Itineraries extends React.Component{
   state = {
      selectedCity: [],
      loading: true,
   } 

   componentDidMount(){
      const receivedId = this.props.match.params.id
      axios.get('http://localhost:4000/api/city/'+receivedId)
      .then(response => this.setState({selectedCity: response.data.respuesta, loading: false})) 
   
   }
   
   render(){
      return (
         <> 
            <ItineraryTittle selectedCity={this.state.selectedCity}/>
         </>
   )
   }  
}


export default Itineraries


