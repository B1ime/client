import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import {
  Login, Main, RoomCreate, RoomDetail, RoomList,
} from './pages';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route path="/roomCreate" component={RoomCreate} />
        <Route path="/list" component={RoomList} />
        <Route path="/detail" component={RoomDetail} />
      </Wrapper>
    );
  }
}

export default App;
