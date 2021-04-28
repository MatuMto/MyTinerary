import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import CitiesHeader from './CitiesHeader'
import CitiesFooter from './CitiesFooter'
const SignUp = ()=>{
   
   var [info, setInfo] = useState([])

   useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setInfo(info= data))
   }, [])
   return (
      <>
         <CitiesHeader/>
         <div className="signUp-mainContainer">
            <h1>Soy el componente de Sign Up</h1>
            <div className="signUpWithGoogle-button">
               <p>Sign up with Google</p>
            </div>
            <form className="signUp-form">
               <input type="text" className="signUp-input" placeholder="Name"></input>
               <input type="text" className="signUp-input" placeholder="Last Name"></input>
               <input type="text" className="signUp-input" placeholder="Mail"></input>
               <input type="text" className="signUp-input" placeholder="Password"></input>
               <input type="text" className="signUp-input" placeholder="Image (url)"></input>
               <select>
                  <option>Country</option>  
                  {info.map(element => <option>{element.name}</option>)}
               </select>   
            </form>
            <button className="register-button">Register</button>
            <NavLink to="/user/signin">Have an account? Sign In Here!</NavLink>
         </div>
         <CitiesFooter/>  
      </>
      ) 
}

export default SignUp