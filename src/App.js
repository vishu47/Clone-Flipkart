import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/Home//index'
import Login from './containers/Login/index'
import Signup from './containers/Signup/index'
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/login" component={Login}  />
          <Route exact path="/signup" component={Signup}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
