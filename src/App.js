import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Main from './container/Main';
import Login from './container/Login';
import Form from './room/Form';
import List from './room/List';

class App extends Component {
  render() {
    return (

      <Router>
      <div>
        <Route path="/login" component ={Login}/>
        <Route exact path="/" component={Main}/>
        <Route path="/form" component={Form}/>
        <Route path="/list" component={List}/>

      </div>
      </Router>
    );
  }
}

export default App;
