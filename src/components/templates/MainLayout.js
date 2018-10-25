import React, { Component } from 'react';
import styled from 'styled-components';
import { IntroSection } from '../organisms';
import create from './images/Create.png';
import participate from './images/Participate.png';

// 전체 360 * 640
const Wrapper = styled.div`
  width: 100%;
  height: 87.5%;
`;

const Container = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

const Divider = styled.div`
  margin: 0 auto;
  width: 77.77%;
  height: 0;
  opacity: 0.2;
  border: 1px solid #222222;
`;

class MainLayout extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <IntroSection
            linkTo="/rooms/create"
            image={create}
            description="새로운 모임을 만들어보세요!"
            title="방 만들기"
          />
        </Container>
        <Divider />
        <Container>
          <IntroSection
            linkTo="/rooms"
            image={participate}
            description="만들어진 모임에 참여해보세요!"
            title="참여하기"
          />
        </Container>
      </Wrapper>
    );
  }
}

export default MainLayout;
