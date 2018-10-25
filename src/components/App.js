import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { FullScreenWrapper } from './atoms/Wrappers';
import {
  Login, Main, RoomCreate, RoomDetail, RoomList,
} from './pages';

class App extends Component {
  render() {
    return (
      <FullScreenWrapper className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route exact path="/rooms/create" component={RoomCreate} />
        <Route exact path="/rooms" component={RoomList} />
        <Route exact path="/rooms/:slug" component={RoomDetail} />
      </FullScreenWrapper>
    );
  }
}

export default App;
