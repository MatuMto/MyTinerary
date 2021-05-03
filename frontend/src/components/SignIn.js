import axios from 'axios'
import {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import CitiesFooter from './CitiesFooter'
import CitiesHeader from './CitiesHeader'
import authActions from '../redux/action/authActions'
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'

const SignIn = (props)=>{
   var [info, setInfo] = useState([])
   const [incomingUser, setIncomingUser] = useState({mail: '', password: ''})

   const saveInfo = (e)=>{
      const element = e.target.name
      const value = e.target.value
      setIncomingUser({
         ...incomingUser,
         [element]: value
      })
   }

   const sendData = async(e = null, userGoogle = null)=>{
      e && e.preventDefault()
      let user = e ? incomingUser : userGoogle // Si hay e, es porque completó los campos, entonces tomo esos datos, sino tomo el user de google
      props.logUser(user)
   }

   const responseGoogle = (response)=> {
      if(response.profileObj.email){
         sendData(null, {mail: response.profileObj.email, password: "a"+response.profileObj.googleId} )
      } else {
         alert('Looks like something went wrong... please come back later.')
      }
   }

   return(
      <>
         <CitiesHeader/>

         <div className="signIn-main-container">
            <div className="form-box">
               <div className="form-container">
                  <h1 className="signIn-tittle">USER SIGN IN</h1>
                  <form action="" className="form">
                    <input type="text" name="mail" value={incomingUser.mail} onChange={saveInfo} className="login-input" placeholder="Mail"/>
                    <input type="password" name="password" value={incomingUser.password} onChange={saveInfo} className="login-input" placeholder="Password"/>
                  </form>
                  <div className="signIn-buttonsContainer">
                    <GoogleLogin
                        clientId="65661377486-3ridgqe1v6hdfj5s067rtfi3jg21nnvh.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                     />
                    <button onClick={sendData} className="login-button">SIGN IN</button>
                  </div>
                  <NavLink className="signIn-callToAction" to="/user/signup">Don't registered yet? Sign up Here!</NavLink>
               </div>
            </div>
         </div>

         {/* Footer */}
         <div className="citiesPage-footerContainer1">
            <footer className="citiesPage-footer1">
               <div className="footerText-left" >MyTinerary</div>
               <div className="footerText-right" >@_mateo.lorenzo_dev</div>
            </footer>
         </div>
      </>

   ) 
}

const mapStateToProps = (state)=>{
   return {
      userLogged: state.auth.userLogged
   }
}

const mapDispatchToProps = {
   logUser: authActions.logUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)