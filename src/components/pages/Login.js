import React, { Component } from 'react';
import { FullHeightWrapper } from '../atoms/Wrappers';
import { LoginLayout } from '../templates';

class Login extends Component {
  render() {
    return (
      <FullHeightWrapper className="login-page">
        <LoginLayout />
      </FullHeightWrapper>
    );
  }
}

export default Login;
