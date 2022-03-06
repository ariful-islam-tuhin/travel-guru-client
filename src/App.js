
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Component/Navigation/Navigation';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Services from './Component/Services/Services';
import AuthProvider from './Component/Context/AuthProvider';
import NotFound from './Component/NotFound/NotFound';

import PlaceBook from './Component/PlaceBook/PlaceBook';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Navigation />
          <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>        
            <Route path="/login">
              <Login></Login>
            </Route>
            <tRoute path="/services">
              <Services></Services>     
            </tRoute>
            <Route path="/placebook">
          <PlaceBook></PlaceBook>    
            </Route>
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
