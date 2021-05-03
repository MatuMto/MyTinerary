import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Itineraries from './pages/Itineraries'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { connect } from 'react-redux'
import authActions from './redux/action/authActions'

function App(props) {
  // Para no perder los datos cuando recargo / Login Forzado
  if(!props.userLogged && localStorage.getItem('token')){
    const datosUsuario = JSON.parse(localStorage.getItem('userLogged'))
    const usuarioLS = {
      token: localStorage.getItem('token'),
      ...datosUsuario
    }
    props.forcedLoginByLS(usuarioLS)
    return null // si no le pongo el return null, sigue leyendo para abajo, pero con esto le digo que mientras está procesando no me muestre nada.
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities}/> 
          <Route exact path="/itineraries/:id" component={Itineraries}/>
          { !props.userLogged && <Route path="/user/signup" component={SignUp}/>}
          { !props.userLogged && <Route path="/user/signin" component={SignIn}/>}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    userLogged: state.auth.userLogged
  }
}

const mapDispatchToProps = {
  forcedLoginByLS: authActions.forcedLoginByLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App);