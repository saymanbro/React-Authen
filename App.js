import React, {useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './Component/Booking/Booking';
import Login from './Component/LogIn/LogIn';
import Room from './Component/Room/Room';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


 export const UserContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({})
  return (
    <UserContext.Provider value ={[loggedUser, setLoggedUser]}>
      
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/sajek'>
        <Booking/>
        </Route>
        <Route path='/sundarban'>
        <Booking/>
        </Route>
        <Route path='/sreemongal'>
          <Booking/>
        </Route>
        <Route path='/login'>
        <Login/>
        </Route>
        <PrivateRoute path='/room'>
          <Room></Room>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
    
   
  );
}

export default App;
