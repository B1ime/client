import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LoginElement } from '../molecules';
import KakaoLogin from './KakaoLogin.png';
import GoogleLogin from './GoogleLogin.png';

const LoginSection = ({ onGoogleLogin, onKakaoLogin }) => (
  <div className="login-section">
    <Fragment>
      <LoginElement
        provider="Kakao"
        imageSource={KakaoLogin}
        onLogin={onKakaoLogin}
      />
      <LoginElement
        provider="Google"
        imageSource={GoogleLogin}
        onLogin={onGoogleLogin}
      />
    </Fragment>
  </div>
);

LoginSection.propTypes = {
  onGoogleLogin: PropTypes.func.isRequired,
  onKakaoLogin: PropTypes.func.isRequired,
};

export default LoginSection;
