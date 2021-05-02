import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import CitiesHeader from './CitiesHeader'
import CitiesFooter from './CitiesFooter'
import axios from 'axios'
// import {connect} from 'react-redux'
import authActions from '../redux/action/authActions'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';


const SignUp = (props)=>{   
   var [info, setInfo] = useState([])
   var [newUser, setNewUser] = useState({name: '', lastName: '', mail: '', password: '', image: '', country: '' })
   var [errors, setErrors] = useState([])

   useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setInfo(info= data))
   }, [])

   const saveInfo = (e)=>{
      const element = e.target.name
      const value = e.target.value
      setNewUser({
         ...newUser,
         [element]: value //Los [] van porque va a ser una propiedad dinamica
      })
   }

   const sendData = async (e = null, googleUser = null)=>{
      e && e.preventDefault()
      let user = e ? newUser : googleUser // Si hay e, es porque completó los campos, entonces tomo esos datos, sino tomo el user de google
      console.log(user)

      const response = await props.registerUser(user)
      if(response){
         setErrors(errors = response.details)
         console.log(response)
      }
      console.log(response)
      console.log(newUser)
   }

   const responseGoogle = (response)=> {
      const { givenName, familyName, email, googleId, imageUrl, country = 'Not Given'} = response.profileObj
      sendData(null, {name: givenName, lastName: familyName, mail: email, password: "a"+googleId, image: imageUrl, country: country} )
   }

   return (
      <>
         <CitiesHeader/>
         <div className="signUp-mainContainer">
            <h1>Soy el componente de Sign Up</h1>
            <div className="signUpWithGoogle-button">
               <p>Sign up with Google</p>
            </div>
            {/* {} */}
            <form className="signUp-form">
            <GoogleLogin
               clientId="65661377486-3ridgqe1v6hdfj5s067rtfi3jg21nnvh.apps.googleusercontent.com"
               buttonText="Sign Up with Google"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
               cookiePolicy={'single_host_origin'}
            />
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.name} name="name" placeholder="Name"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.lastName} name="lastName" placeholder="Last Name"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.mail} name="mail" placeholder="Mail"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.password} name="password" placeholder="Password"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.image} name="image" placeholder="Image (url)"></input>
               <select value={newUser.country} name="country" onChange={saveInfo}>
                  <option >Country</option>  
                  {info.map(element => <option>{element.name}</option>)}
               </select>   
            </form>
            <button className="register-button" onClick={sendData}>Register</button>
            <NavLink to="/user/signin">Have an account? Sign In Here!</NavLink>
         </div>
         <div>
            {errors.map(error => {
               return <h1> {error.message} </h1>
            } )} 
         </div>
         <CitiesFooter/>  
      </>
      ) 
}

const mapDispatchToProps = {
   registerUser: authActions.registerUser
}

export default connect(null, mapDispatchToProps)(SignUp)
// export default SignUp