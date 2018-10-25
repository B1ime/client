import React, { Component } from 'react';
import { RoomListSection } from '../organisms';
import styled from 'styled-components';
import { Banner } from '../molecules';

const Wrapper = styled.div`
  margin-left: 5.56%;
`;

class RoomListLayout extends Component {
  render() {
    return (
      <Wrapper>
        <Banner />
        <RoomListSection />
      </Wrapper>
    );
  }
}

export default RoomListLayout;
