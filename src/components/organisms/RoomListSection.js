import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NewRoom, Room } from '../molecules';

const Wrapper = styled.div`
  display: inline;
  margin-left: auto;
  margin-right: auto;
`;

// Temporary
const rooms = [
  {
    id: 'room',
    name: '방 이름',
    place: '서울시 마포구 공덕동',
    time: '오후 3시 30분',
    currentPeople: 3,
    maxPeople: 6,
  },
  {
    id: 'room',
    name: '방 이름',
    place: '서울시 마포구 공덕동',
    time: '오후 3시 30분',
    currentPeople: 3,
    maxPeople: 6,
  },
  {
    id: 'room',
    name: '방 이름',
    place: '서울시 마포구 공덕동',
    time: '오후 3시 30분',
    currentPeople: 3,
    maxPeople: 6,
  },
  {
    id: 'room',
    name: '방 이름',
    place: '서울시 마포구 공덕동',
    time: '오후 3시 30분',
    currentPeople: 3,
    maxPeople: 6,
  },
  {
    id: 'room',
    name: '방 이름',
    place: '서울시 마포구 공덕동',
    time: '오후 3시 30분',
    currentPeople: 3,
    maxPeople: 6,
  },
];

class RoomListSection extends Component {
  render() {
    return (
      <Wrapper>
        <NewRoom />
        {rooms.map(({ id, ...room }) => (
          <Link to={`/rooms/${id}`}>
            <Room key={id} {...room} />
          </Link>
        ))}
      </Wrapper>
    );
  }
}

export default RoomListSection;
