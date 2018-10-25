import React from 'react';
import styled from 'styled-components';
import LabelImage from './images/AppIcon.png';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 38.89%;
  padding-bottom: 29.69%;
`;

const Image = styled.img`
  display: inherit;
  margin: 0 auto;
  width: 38.9%;
  object-fit: contain;
`;

const AppLabel = () => (
  <Wrapper>
    <Image src={LabelImage} alt="app-icon" />
  </Wrapper>
);

export default AppLabel;
