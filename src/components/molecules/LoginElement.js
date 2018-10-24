import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph } from '../atoms';

const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  width: 320px;
  height: 40px;
  border-radius: 6px;
  background-color: #333333;
`;

const ProviderImage = styled.img`
  position: absolute;
  left: 15%;
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

const LoginElement = ({ imageSource, provider, onLogin }) => (
  <LoginButton onClick={onLogin}>
    <ProviderImage src={imageSource} alt="kakao-login" />
    <Paragraph size={1.2} lineHeight={1.5} color="#ffffff">
      Login with <strong>{provider}</strong>
    </Paragraph>
  </LoginButton>
);

LoginElement.propTypes = {
  imageSource: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginElement;
