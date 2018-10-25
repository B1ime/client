import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../templates';
import { FullScreenButton } from '../atoms/Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 6%;
`;

const Main = () => (
  <Wrapper>
    <Fragment>
      <MainLayout />
    </Fragment>
    <Fragment>
      <FullScreenButton bgColor="#f0f0f0" color="#222222" size={1.4}>
        홈으로 바로가기
      </FullScreenButton>
    </Fragment>
  </Wrapper>
);

export default Main;
