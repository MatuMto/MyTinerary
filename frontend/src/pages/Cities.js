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
      .catch(error => console.log(error))
   }

   getFilterValue = (e)=>{
      var inputValue = e.target.value
      this.setState({filterValue: inputValue.trim()})
   }

   renderCities = () => {
      if (this.state.loading) {
         return <div style={{height:'50vh'}}>Cargando...</div>
      }

      if (this.state.allCities.length === 0) {
         return <p>No hubo resultados de la api</p>
      }

      if (this.state.filterValue === '') {
         return this.state.allCities.map((city) => <CityCard location={city} key={city.id} />)
      }

      const filteredCities = this.state.allCities.filter((  {cityName} ) => {
         return cityName.toLowerCase().slice(0, this.state.filterValue.length) === this.state.filterValue.toLowerCase()
      })

      if (filteredCities.length === 0) {
         return <div style={{height: '50vh'}}>No hay resultados que coincidan con tu busqueda</div>
      }

      return filteredCities.map((city) => <CityCard location={city} key={city.id} />)
   }

   render(){
      return(
         <div style={{background: 'hsla(30, 71%, 84%, 0.842)', display: 'flex', flexDirection: 'column',}}>
            <header className="header" style={{background: 'rgb(250,232,228)', borderBottom: '1px solid grey   '}}>
               <div className="homeAndCities-container" style={{ display: 'flex', alignItems: 'flex-end'}}>
                  <NavLink to="/" style={{color: 'black'}}>Home</NavLink>
                  <div style={{color: 'black'}}>|</div>
                  <NavLink to="/cities" style={{color: 'black'}}>Cities</NavLink>
               </div>

               <div className="logo-container">
                  <img src="/img/logo-finish.png" alt="mi loguito :)" style={{width: '150px'}}></img>
                  <h1 className="logo-text">MyTinerary</h1>
               </div>

               <div className="login-section">
                  <p  className="link" style={{color: 'black'}}>Sign Up</p>
                  <p style={{color: 'black'}}>|</p>
                  <p  className="link" style={{color: 'black'}}>Log In</p>
                  <div style={{ marginLeft: '20px'}}>
                     <img src="/img/black-user-icon.png" style={{width: '60px', color: 'black'}} className="unlogged-icon" alt="user unloged logo"></img>
                  </div>
               </div>
            </header>              
            
            <div className="cities-page-tittle-container">
               <h1>Check out All these options!</h1>   
               <input onChange={this.getFilterValue} placeholder="Search Here!" className="main-input" style={{width: '15vw', height:'4vh', fontSize: '30px', paddingLeft: '20px', borderRadius: '5px' }} type="text" />
            </div>

            <div style={{
               display: 'flex',
               flexWrap: 'wrap',
               justifyContent: 'center'
            }}>
               {this.renderCities()}
            </div>

            <div className="citiesPage-footerContainer">
               <footer className="citiesPage-footer">
                  <div style={{borderRight: '2px solid white', fontSize: '30px', paddingRight: '10px', color:'white'}}>MyTinerary</div>
                  <div style={{paddingLeft: '10px', fontSize: '25px', color:'white'}}>@_mateo.lorenzo_dev</div>
               </footer>
            </div>

            
         </div>
   )
   }
}

export default Cities