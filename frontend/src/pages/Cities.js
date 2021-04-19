import {NavLink} from 'react-router-dom'
import CityCard from '../components/CityCard'
import {state, setState, useState} from 'react'
import React from 'react'
import axios from 'axios'
import CitiesHeader from '../components/CitiesHeader'
import CitiesFooter from '../components/CitiesFooter'

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
      .catch(error => console.log(error))
   }

   getFilterValue = (e)=>{
      var inputValue = e.target.value
      this.setState({filterValue: inputValue.trim()})
   }

   renderCities = () => {
      if (this.state.loading) {
         return <div style={{height:'50vh'}}>Loading...</div>
      }

      if (this.state.allCities.length === 0) {
         return <p>I'm sorry, looks like we're having some database problems.. Come back later!</p>
      }

      if (this.state.filterValue === '') {
         return this.state.allCities.map((city) => <CityCard location={city} key={city.id} />)
      }

      const filteredCities = this.state.allCities.filter((  {cityName} ) => {
         return cityName.toLowerCase().slice(0, this.state.filterValue.length) === this.state.filterValue.toLowerCase()
      })

      if (filteredCities.length === 0) {
         return <div style={{height: '40vh', margin: '10vh auto 0vh auto', borderRadius: '10px', width: '80%', background: `url(/img/fondo-nomatch.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
            <p className="no-match-text1">Wow! How did you know? That city is coming very soon!</p>
            <p className="no-match-text2">While, you can try searching any other..</p>
         </div>
      }

      return filteredCities.map((city) => <CityCard location={city} key={city.id} />)
   }

   render(){
      return(
         <div style={{background: 'hsla(30, 71%, 84%, 0.842)', display: 'flex', flexDirection: 'column',}}>
           
            <CitiesHeader/>
            
            <div className="cities-page-tittle-container">
               <h1 className="citiesPage-tittle">Check out All these options!</h1>   
               <input onChange={this.getFilterValue} placeholder="Search Here!" className="main-input"  type="text" />
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
               {this.renderCities()}
            </div>

            <CitiesFooter/>
            
         </div>
   )
   }
}

export default Cities