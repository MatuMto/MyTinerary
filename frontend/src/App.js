import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Itineraries from './pages/Itineraries'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities}/> 
          <Route exact path="/itineraries/:id" component={Itineraries}/>
          <Route path="/user/signup" component={SignUp}/>
          <Route path="/user/signin" component={SignIn}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;