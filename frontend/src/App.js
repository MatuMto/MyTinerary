import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/">
            <Home/>
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
