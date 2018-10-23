import React from 'react';
import styled from 'styled-components';
import LabelImage from './AppIcon.png';

const Wrapper = styled.div`
  margin: 104px auto 133px auto;
`;

const Image = styled.img`
  display: inherit;
  margin: 0 auto;
  width: 172px;
  height: 149px;
  object-fit: contain;
`;

const AppLabel = () => (
  <Wrapper>
    <Image src={LabelImage} className="Ellipse-1-copy" />
  </Wrapper>
);

export default AppLabel;
