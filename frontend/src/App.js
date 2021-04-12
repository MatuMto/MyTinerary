import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Carrousel from './components/Carrousel'
import CarrouselData from './components/CarrouselData'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/">
            <Home/>
            <Carrousel carrouselData={CarrouselData}/>
            <Footer/>
          </Route>

          <Route path="/cities">
            <Cities/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
