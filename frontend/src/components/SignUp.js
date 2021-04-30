import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import CitiesHeader from './CitiesHeader'
import CitiesFooter from './CitiesFooter'
import axios from 'axios'
// import {connect} from 'react-redux'
import authActions from '../redux/action/authActions'
import { connect } from 'react-redux'

const SignUp = (props)=>{   

   useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setInfo(info= data))
   }, [])

   var [info, setInfo] = useState([])
   var [newUser, setNewUser] = useState({name: '', lastName: '', mail: '', password: '', image: '', country: '' })
   var [errors, setErrors] = useState([])

   const saveInfo = (e)=>{
      const element = e.target.name
      const value = e.target.value
      setNewUser({
         ...newUser,
         [element]: value //sin los [] no funciona.. ¿pero porque?
      })
      console.log(newUser)
   }

   const sendData = async (e)=>{
      e.preventDefault()
      const response = await props.registerUser(newUser)
      if(response){
         console.log('vino algo en la respuesta con errores')
         console.log(response)
      }
   }
   
   const mostrarValor = (e)=>{
      console.log(e.target.value)
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
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.name} name="name" placeholder="Name"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.lastName} name="lastName" placeholder="Last Name"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.mail} name="mail" placeholder="Mail"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.password} name="password" placeholder="Password"></input>
               <input type="text" onChange={saveInfo} className="signUp-input" value={newUser.image} name="image" placeholder="Image (url)"></input>
               <select value={newUser.country} name="country" onChange={saveInfo}>
                  <option>Country</option>  
                  {info.map(element => <option>{element.name}</option>)}
               </select>   
            </form>
            <button className="register-button" onClick={sendData}>Register</button>
            <NavLink to="/user/signin">Have an account? Sign In Here!</NavLink>
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