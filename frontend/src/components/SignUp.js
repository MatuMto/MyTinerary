import {NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import CitiesHeader from './CitiesHeader'
import authActions from '../redux/action/authActions'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login';


const SignUp = (props)=>{   
   // en info guardo los paises fetcheados
   var [info, setInfo] = useState([])
   var [newUser, setNewUser] = useState({name: '', lastName: '', mail: '', password: '', image: '', country: '' })
   var [errors, setErrors] = useState([])

   useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setInfo(data))
   }, [])

   const saveInfo = (e)=>{
      const element = e.target.name //agarro el campo que está llenando el usuario
      const value = e.target.value  //agarro el valor/lo q está escribiendo el usuario
      setNewUser({
         ...newUser,
         [element]: value //Los [] van porque va a ser una propiedad dinamica
      })
   }

   const sendData = async (e = null, googleUser = null)=>{
      e && e.preventDefault()
      let user = e ? newUser : googleUser // Si hay e, es porque completó los campos, entonces tomo esos datos, sino tomo el user de google
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

         <div className="signIn-main-container">
            <div className="form-box">
               <div className="form-container">
               <h1 className="register-tittle">USER SIGN UP</h1>
               <h1 className="register-tittle2">SIGN UP</h1>
               <div className="errorMessages-container">
                  {errors.map(error => {
                     return <p> {error.message} </p>
                  } )} 
               </div>
                  <form action="" className="form">
                     <input type="text" onChange={saveInfo} value={newUser.name} name="name" className="register-input" placeholder="Name"/>
                     <input type="text" onChange={saveInfo} value={newUser.lastName} name="lastName" className="register-input" placeholder="Last Name"/>
                     <input type="text" onChange={saveInfo} value={newUser.mail} name="mail" className="register-input" placeholder="Mail"/>
                     <input type="password" onChange={saveInfo} value={newUser.password} name="password" className="register-input" placeholder="Password"/>
                     <input type="text" onChange={saveInfo} value={newUser.image} name="image" className="register-input" placeholder="Image (url)"/>
                     <select className="signUp-select" value={newUser.country} name="country" onChange={saveInfo} >
                        <option >Country</option>  
                        {info.map((element, index) => <option key={index} className="country-option">{element.name}</option>)}
                     </select>
                  </form>
                  <div className="register-buttonsContainer">
                  <GoogleLogin
                     clientId="65661377486-3ridgqe1v6hdfj5s067rtfi3jg21nnvh.apps.googleusercontent.com"
                     buttonText="Sign Up with Google"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}
                  />
                     <button onClick={sendData} className="register-button">REGISTER</button>
                  </div>
                  <NavLink to="/user/signin" className="register-callToAction">Have an account? Sign In Here!</NavLink>
               </div>
            </div>
         </div>
         <div className="citiesPage-footerContainer1">
            <footer className="citiesPage-footer1">
               <div className="footerText-left" >MyTinerary</div>
               <div className="footerText-right" >@_mateo.lorenzo_dev</div>
            </footer>
         </div>
      </>
      ) 
}

const mapDispatchToProps = {
   registerUser: authActions.registerUser
}

export default connect(null, mapDispatchToProps)(SignUp)
// export default SignUp