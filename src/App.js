import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Homepage}/>
         <Route path="/signup" component={Signup}/>
         <Route path="/login" component={Login}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
