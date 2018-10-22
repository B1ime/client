import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { executeLogin } from '../../actions/login/actions';

import { AppLabel, LoginSection, Footer } from '../organisms';

const Wrapper = styled.div``;

class LoginLayout extends Component {
  static propTypes = {
    onGoogleLogin: PropTypes.func.isRequired,
    onKakaoLogin: PropTypes.func.isRequired,
  };

  render() {
    const { onGoogleLogin, onKakaoLogin } = this.props;
    return (
      <Wrapper>
        <AppLabel />
        <LoginSection
          onGoogleLogin={onGoogleLogin}
          onKakaoLogin={onKakaoLogin}
        />
        <Footer />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGoogleLogin: event => {
    event.preventDefault();
    console.log('구글 로그인 버튼 클릭');
  },
  onKakaoLogin: event => {
    event.preventDefault();
    console.log('카카오 로그인 버튼 클릭');
  },
});

export default connect(null, mapDispatchToProps)(LoginLayout);
