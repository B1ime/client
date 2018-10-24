import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { IntroSection } from '../organisms';
import create from './create.png';
import participate from './participate.png';
import { HomeButton } from '../atoms/Button';

// 전체 360 * 640
const Wrapper = styled.div`
  width: 100%;
  height: 560px;
`;

const Container = styled.div`
  width: 100%;
  height: 50%;
`;

const Divider = styled.hr`
  width: 80%;
  height: 0;
  opacity: 0.2;
  border-color: #222222;
`;

class MainLayout extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <IntroSection
            image={create}
            description="새로운 모임을 만들어보세요!"
            title="방 만들기"
          />
        </Container>
        <Divider />
        <Container>
          <IntroSection
            image={participate}
            description="만들어진 모임에 참여해보세요!"
            title="참여하기"
          />
        </Container>
        <Fragment>
          <HomeButton>홈으로 바로가기</HomeButton>
        </Fragment>
      </Wrapper>
    );
  }
}

export default MainLayout;
