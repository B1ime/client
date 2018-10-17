import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Login, Main } from './pages';

const Wrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
      </Wrapper>
    );
  }
}

export default App;
