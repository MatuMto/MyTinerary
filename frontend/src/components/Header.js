import React from 'react'

function Header (){
   return(
      <header className="header">
         <div className="homeAndCities-container">
            <a href="#" className="link">Home</a>
            <p>|</p>
            <a href="#" className="link">Cities</a>
         </div>

         <div className="logo-container">
            <img src="/img/logo-finish.png" style={{width: '150px'}}></img>
            <h1 className="logo-text">MyTinerary</h1>
         </div>

         <div className="login-section">
            <a href="#" className="link">Log In</a>
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