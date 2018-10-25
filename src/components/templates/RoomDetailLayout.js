import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RoomDetailNavbar, RoomMap, RoomMemberSection } from '../organisms';
import { FullScreenWrapper, FullWidthWrapper } from '../atoms/Wrappers';
import { FullScreenButton } from '../atoms/Button';

const Wrapper = styled(FullScreenWrapper)`
  background-color: #f0f0f0;
`;

class RoomDetailLayout extends Component {
  static propTypes = {
    roomName: PropTypes.string.isRequired,
  };

  handleClick = event => {
    event.preventDefault();
    console.log('참여하기 클릭');
  };

  render() {
    const { roomName } = this.props;
    return (
      <Wrapper>
        <RoomDetailNavbar roomName={roomName} />
        <FullWidthWrapper height="83.5%">
          <RoomMap />
          <RoomMemberSection />
        </FullWidthWrapper>
        <FullScreenButton
          bgColor="#4262f3"
          color="#ffffff"
          size={1.6}
          onClick={this.handleClick}
        >
          참여하기
        </FullScreenButton>
      </Wrapper>
    );
  }
}

export default RoomDetailLayout;
