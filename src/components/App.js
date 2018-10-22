import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login, Main } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
      </div>
    );
  }
}

export default App;
