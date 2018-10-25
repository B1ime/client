import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import plus from './images/Plus.png';
import { Paragraph } from '../atoms';

const Wrapper = styled.div`
  border: 1px dotted black;
  width: 152px;
  height: 158px;
  float: left;
  margin-right: 12px;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const Image = styled.img`
  margin-top: 53px;
  margin-left: 64px;
  width: 26px;
  height: 26px;
  object-fit: contain;
`;

const NewRoom = () => (
  <Link to="/rooms/create">
    <Wrapper>
      <Image src={plus} alt="plus-icon" className="plus" />
      <Paragraph size={1.4} lineHeight={1.47} align="center" color="#222222">
        방 만들기
      </Paragraph>
    </Wrapper>
  </Link>
);

export default NewRoom;
