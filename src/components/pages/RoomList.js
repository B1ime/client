import React, { Component } from 'react';
import { FullHeightWrapper } from '../atoms/Wrappers';
import { RoomListLayout } from '../templates';

class RoomList extends Component {
  render() {
    return (
      <FullHeightWrapper>
        <RoomListLayout />
      </FullHeightWrapper>
    );
  }
}

export default RoomList;
