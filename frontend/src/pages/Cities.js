import {NavLink} from 'react-router-dom'
import CityCard from '../components/CityCard'
import {state, setState, useState} from 'react'
import React from 'react'
import axios from 'axios'

// const Cities = ()=>{
class Cities extends React.Component{

   state = {
      filterValue: '',
      allCities: [],
      loading: true
   }

   componentDidMount(){
      axios.get('http://localhost:4000/api/cities')
      .then(response => this.setState({allCities: response.data.respuesta, loading: false}))
   }

   // citiesFilter = (e)=>{
   //    var inputValue = e.target.value
   //    this.setState(this.state.filterValue = inputValue.trim())
   //    console.log(this.state.filterValue)
   // }
   render(){

      var mostrarValor = (e)=>{
         console.log(e.target.value)
      } 
      return(
         <>
            <NavLink to="/">Home</NavLink>
               
            <div className="cities-container">
               {/* <input onChange={this.citiesFilter} onClick={mostrarValor} type="text" style={{margin: '0 auto'}} /> */}
               <input onClick={mostrarValor} type="text" style={{margin: '0 auto'}} />
            </div>

            {this.state.allCities.map((city)=>{
               // var nombre = 'matumto'
               // nombre.slice(0,3) = mat | empieza en 0, termina en 2
               if(city.cityName.toLowerCase().slice(0, this.state.filterValue.length) === this.state.filterValue.toLocaleLowerCase()){
                  console.log('Me encontraste!')
                  return <CityCard location={city} key={city.id} />
               }
            })}
         </>
   )
   }
}

export default Cities