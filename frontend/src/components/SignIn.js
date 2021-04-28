import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import CitiesFooter from './CitiesFooter'
import CitiesHeader from './CitiesHeader'

const SignIn = ()=>{
   var [info, setInfo] = useState([])

   useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setInfo(info= data))
   }, [])
   return(
      <>
         <CitiesHeader/>
         <div className="signUp-mainContainer">
            <h1>Soy el componente de Sign In</h1>
            <div className="signUpWithGoogle-button">
               <p>Sign in with Google</p>
            </div>
            <form className="signUp-form">
               <input type="text" className="signUp-input" placeholder="Mail"></input>
               <input type="text" className="signUp-input" placeholder="Password"></input>
            </form>
            <button className="register-button">Sign In</button>
            <NavLink to="/user/signup">Don't Registered yet? Sign up Here!</NavLink>
         </div>
         <CitiesFooter/>
      </>

   ) 
   
}

export default SignIn