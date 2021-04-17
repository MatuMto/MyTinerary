// import React, { useEffect } from 'react'
import ItineraryTittle from '../components/ItineraryTittle'
import CityCard from '../components/CityCard'
import {NavLink} from 'react-router-dom'
import {state, setState, useState, useEffect} from 'react'
import axios from 'axios'
import React from 'react'

// const Itineraries = (props)=>{
class Itineraries extends React.Component{
   state = {
      allCities: [],
      selectedCity: [],
      loading: true
   } 

   componentDidMount(){
      axios.get('http://localhost:4000/api/cities')
      .then(response => this.setState({allCities: response.data.respuesta})) //destructuring?

      axios.delete('http://localhost:4000/api/allCities')
      .then(response => this.setState({allCities: response.data.respuesta})) //destructuring?
      
   }

   render(){
      console.log(this.state.allCities)
      const receivedId = this.props.match.params.id
      console.log(receivedId)
      
      // const selectedCity = citiesData.find((city)=>city.id === parseInt(receivedId)) 

            
            
            // Aca le voy a decir: Hey back! Pasame el objeto con los datos de aquella ciudad que tiene el id: cualquiera
            
            return (
               <> 
         <ItineraryTittle receivedId={receivedId}/>
           {/* selectedCity={selectedCity} */}
      </>
   )
   }  
}


export default Itineraries


