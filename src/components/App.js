// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Route } from 'react-router-dom';
import { Login, Main, RoomCreate, RoomDetail, RoomList } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route path="/roomCreate" component={RoomCreate} />
        <Route path="/list" component={RoomList} />
        <Route path="/detail" component={RoomDetail} />
      </div>
    );
  }
}

export default App;
