import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Itineraries from './pages/Itineraries'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities}/> 
          <Route exact path="/itineraries/:id" component={Itineraries}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;