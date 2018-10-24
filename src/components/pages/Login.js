import React, { Component } from 'react';
import { LoginLayout } from '../templates';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <LoginLayout />
      </div>
    );
  }
}

export default Login;
