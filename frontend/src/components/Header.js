import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import {useState} from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/action/authActions'

function Header (props){
   const userImage = props.userLogged ? props.userLogged.image : 'https://i.imgur.com/LPFZ4Rj.png'

   const [dropdown, setDropdown] = useState(false) 
   const abrirCerrarDropdown = ()=>{
      setDropdown(!dropdown)
   }
   return(
      <>
         <header className="header">
            <div className="homeAndCities-container">
               <NavLink to="/" >Home</NavLink>
               <div>|</div>
               <NavLink to="/cities" >Cities</NavLink>
            </div>

            <div className="logo-container">
               <img src="/img/logo-finish.png" alt="mi loguito :)" style={{width: '150px'}}></img>
               <h1 className="logo-text">MyTinerary</h1>
            </div>

            <div className="login-section">
               {!props.userLogged &&
                  <>
                     <NavLink to="/user/signup"  className="link" style={{color: 'black'}}>Sign Up</NavLink>
                     <p className="signUp-divisorLine">|</p>
                     <NavLink to="/user/signin" className="link" style={{color: 'black'}}>Sign In</NavLink>
                  </>
               }
               {props.userLogged && <NavLink to="/"><p className="signOut-button home" onClick={props.logOutUser} >Sign Out</p></NavLink>}   
               {props.userLogged && <p className="userName home ">|</p>}
               {props.userLogged && <p className="userName home"> {props.userLogged.name}</p>}   

               <div style={{ marginLeft: '20px', width:'50px', height: '50px', backgroundImage: `url(${userImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

               </div>
            </div>

            {/* <div className="login-section">
               <NavLink to="/user/signup"  className="link" style={{color: 'white'}}>Sign Up</NavLink>
               <p style={{color: 'white', marginBottom: '0px'}}>|</p>
               <NavLink to="/user/signin" className="link" style={{color: 'white'}}>Sign In</NavLink>
               <div style={{ marginLeft: '20px'}}>
                  <img src="/img/user-icon.png" className="unlogged-icon" style={{width: '60px'}} alt="user unloged logo"></img>
               </div>
            </div> */}
         </header>
      
         <header className="header-responsive">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
               <DropdownToggle>
                  <img src="/icons/hamburger.png" alt="hamburguer responsive " width="20px" />
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
                  {/* <img src="/img/user-icon.png" alt="user unloged icon" style={{width: '50px'}}></img> */}
                  <div className="userUnlogged-icon" style={{backgroundImage: `url('https://i.imgur.com/LPFZ4Rj.png')`, width:'50px', height: '50px'}}></div>
               </div>
            {/* </div> */}
         </header>
      </>

   )
}


const mapStateToProps = (state)=>{
   return {
      userLogged: state.auth.userLogged
   }
}

const mapDispatchToProps = {
   logOutUser: authActions.logOutUser
} 

export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Header