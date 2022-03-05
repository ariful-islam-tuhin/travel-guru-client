
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Component/Navigation/Navigation';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Services from './Component/Services/Services';
import AuthProvider from './Component/Context/AuthProvider';
import NotFound from './Component/NotFound/NotFound';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';


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
            <PrivetRoute path="/services">
              <Services></Services>     
            </PrivetRoute>
            
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
