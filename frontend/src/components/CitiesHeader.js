import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import {useState} from 'react'

const CitiesHeader = ()=>{
   const [dropdown, setDropdown] = useState(false) 
   const abrirCerrarDropdown = ()=>{
      setDropdown(!dropdown)
   }
   return (
      <>
         <header className="cities-header">
            <div className="homeAndCities-container" style={{ display: 'flex', alignItems: 'flex-end'}}>
               <NavLink to="/" style={{color: 'black'}}>Home</NavLink>
               <div style={{color: 'black'}}>|</div>
               <NavLink to="/cities" style={{color: 'black'}}>Cities</NavLink>
            </div>

            <div className="logo-container">
               <img src="/img/logo-finish.png" alt="mi loguito :)" style={{width: '150px'}}></img>
               <h1 className="logo-text" style={{color: 'black'}} >MyTinerary</h1>
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


         <header className="cities-header-responsive">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
               <DropdownToggle>
                  options
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
               <img src="/img/logo-finish.png" alt="mi loguito :)" style={{width: '150px'}}></img>
               <h1 className="logo-text" style={{color: 'black'}} >MyTinerary</h1>
            </div>

            {/* <div className="login-section"> */}
            <div style={{ marginLeft: '20px'}}>
                  <img src="/img/black-user-icon.png" style={{width: '60px', color: 'black'}} className="unlogged-icon" alt="user unloged logo"></img>
               </div>
            {/* </div> */}
         </header>
      </>
   )
}

export default CitiesHeader