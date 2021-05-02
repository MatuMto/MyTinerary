import axios from 'axios'
import {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import CitiesFooter from './CitiesFooter'
import CitiesHeader from './CitiesHeader'
import authActions from '../redux/action/authActions'
import { GoogleLogin } from 'react-google-login';

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
         
         <div className="signUp-mainContainer">
            <h1>Soy el componente de Sign In</h1>
            <div className="signUpWithGoogle-button">
               <p>Sign in with Google</p>
            </div>

            <form className="signUp-form">
               <GoogleLogin
                  clientId="65661377486-3ridgqe1v6hdfj5s067rtfi3jg21nnvh.apps.googleusercontent.com"
                  buttonText="Sign In with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
               />
               <input type="text" className="signUp-input" name="mail" value={incomingUser.mail} onChange={saveInfo} placeholder="Mail"></input>
               <input type="text" className="signUp-input" name="password" value={incomingUser.password} onChange={saveInfo} placeholder="Password"></input>
            </form>
            <button className="register-button" onClick={sendData}>Sign In</button>

            <NavLink to="/user/signup">Don't Registered yet? Sign up Here!</NavLink>
         </div>

         <CitiesFooter/>
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