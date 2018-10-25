import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90%;
  height: 92px;
  margin: 6px auto;
  border-radius: 6px;
  background-color: #ffffff;
`;

const MemberName = styled.h3`
  padding-left: 17px;
  padding-top: 17px;
  margin: 0;
  font-size: 1.4em;
  font-weight: bold;
  color: #000000;
`;

const MemberPlace = styled.p`
  margin: 0;
  padding-top: 2px;
  padding-left: 17px;
  font-size: 1em;
  font-weight: 300;
  color: #707070;
`;

const LocationInfo = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Distance = styled.p`
  margin: 0;
  padding-left: 17px;
  font-size: 1em;
  color: #222222;
`;

const RemainingTime = styled.p`
  margin: 0;
  padding-right: 15px;
  font-size: 1.2em;
  font-weight: 100;
  color: #000000;
  strong {
    font-size: 1.4em;
    font-weight: bold;
  }
`;

const RoomMember = () => (
  <Wrapper>
    <MemberName>멤버 이름</MemberName>
    <MemberPlace>현 위치</MemberPlace>
    <LocationInfo>
      <Distance>거리</Distance>
      <RemainingTime>
        Arrival time <strong>2:52 PM</strong>
      </RemainingTime>
    </LocationInfo>
  </Wrapper>
);

export default RoomMember;
