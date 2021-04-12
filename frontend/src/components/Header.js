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
               <NavLink to="/" >Home</NavLink>
               <p>|</p>
               <NavLink to="/cities" >Cities</NavLink>
            </div>

            <div className="logo-container">
               <img src="/img/logo-finish.png" alt="mi loguito :)" style={{width: '150px'}}></img>
               <h1 className="logo-text">MyTinerary</h1>
            </div>

            <div className="login-section">
               <p  className="link">Sign Up</p>
               <p>|</p>
               <p  className="link">Log In</p>
               <div style={{ marginLeft: '20px'}}>
                  {/* <i></i> */}
                  <img src="/img/user-icon.png" alt="user unloged logo"></img>
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
                  <DropdownItem>
                     <NavLink to="/cities" >Cities</NavLink>
                  </DropdownItem>
                  <DropdownItem>Sign Up</DropdownItem>
                  <DropdownItem disabled>Log In</DropdownItem>
               </DropdownMenu>
            </Dropdown>

            <div className="logo-container">
               <img src="/img/logo-finish.png" alt="My logo :)" style={{width: '80px'}}></img>
               <h1 className="logo-text">MyTinerary</h1>
            </div>

            {/* <div className="login-section"> */}
               <div style={{ marginLeft: '20px'}}>
                  <img src="/img/user-icon.png" alt="user unloged icon" style={{width: '50px'}}></img>
               </div>
            {/* </div> */}
         </header>
      </>

   )
}

export default Header