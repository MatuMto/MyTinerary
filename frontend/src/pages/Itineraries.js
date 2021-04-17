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
      loading: true,
      // receivedId: this.props.match.params.id
   } 

   componentDidMount(){
      axios.get('http://localhost:4000/api/cities')
      .then(response => this.setState({allCities: response.data.respuesta})) 
         
      
      const receivedId = this.props.match.params.id
      axios.get('http://localhost:4000/api/itineraries/'+receivedId)
      .then(response => this.setState({selectedCity: response.data.respuesta})) 
   
   }
   

   
   render(){
      console.log(this.state.selectedCity)            
      return (
         <> 
            <ItineraryTittle selectedCity={this.state.selectedCity}/>
         </>
   )
   }  
}


export default Itineraries


