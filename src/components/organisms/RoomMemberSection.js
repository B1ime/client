import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RoomMember } from '../molecules';

const Wrapper = styled.div`
  height: 200px;
  overflow: scroll;
`;

const Description = styled.p`
  margin: 16px 0 0 20px;
  font-size: 1em;
  line-height: 2.2;
  color: #666666;
`;

class RoomMemberSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    };
  }

  render() {
    return (
      <Fragment>
        <Description>클릭하면 지도에서 위치를 확인할 수 있어요</Description>
        <Wrapper>
          <RoomMember />
          <RoomMember selected />
          <RoomMember />
          <RoomMember />
        </Wrapper>
      </Fragment>
    );
  }
}

export default RoomMemberSection;
