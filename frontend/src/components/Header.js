import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import {useState} from 'react'

function Header (){
   const [dropdown, setDropdown] = useState(false) 
   const abrirCerrarDropdown = ()=>{
      setDropdown(!dropdown)
   }

   return(
      <>
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
      
         <header className="header-responsive">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
               <DropdownToggle>
                  Links
               </DropdownToggle>

               <DropdownMenu>
                  <DropdownItem>Home</DropdownItem>
                  <DropdownItem>Cities</DropdownItem>
                  <DropdownItem>Sign Up</DropdownItem>
                  <DropdownItem disabled>Log In</DropdownItem>
               </DropdownMenu>
            </Dropdown>

            <div className="logo-container">
               <img src="/img/logo-finish.png" style={{width: '80px'}}></img>
               <h1 className="logo-text">MyTinerary</h1>
            </div>

            {/* <div className="login-section"> */}
               <div style={{ marginLeft: '20px'}}>
                  <img src="/img/user-icon.png" style={{width: '50px'}}></img>
               </div>
            {/* </div> */}
         </header>
      </>

   )
}

export default Header