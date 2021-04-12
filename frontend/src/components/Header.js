import React from 'react'
import {NavLink} from 'react-router-dom'

function Header (){
   return(
      <header className="header">
         <div className="homeAndCities-container">
            <NavLink to="/" className="link">Home</NavLink>
            <p>|</p>
            <NavLink to="/cities" className="link">Cities</NavLink>
         </div>

         <div className="logo-container">
            <img src="/img/logo-finish.png" style={{width: '150px'}}></img>
            <h1 className="logo-text">MyTinerary</h1>
         </div>

         <div className="login-section">
            <a href="#" className="link">Sign Up</a>
            <p>|</p>
            <a href="#" className="link">Log In</a>
            <div style={{ marginLeft: '20px'}}>
               {/* <i></i> */}
               <img src="/img/user-icon.png"></img>
            </div>
         </div>
         
      </header>
   )
}

export default Header