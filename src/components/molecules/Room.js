import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import profile from './images/Profile.png';
import { Paragraph } from '../atoms';
import '../Components.css';

const Wrapper = styled.div`
  display: block;
  float: left;
  width: 154px;
  height: 160px;
  border-radius: 6px;
  background-color: #f0f0f0;
  margin-bottom: 12px;
  margin-right: 12px;
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Image = styled.img`
  width: 33.9px;
  height: 33.9px;
  object-fit: contain;
  margin-top: 4.9px;
`;

const Room = ({
  name, place, time, currentPeople, maxPeople,
}) => (
  <Wrapper>
    <Container>
      <Paragraph
        margin="21.6px auto auto auto"
        size={1.4}
        fontWeight={300}
        lineHeight={1.57}
        color="#222222"
        align="center"
      >
        {name}
      </Paragraph>
      <Image src={profile} alt="profile-icon" />
      <Paragraph size={1} lineHeight={1.4} color="#222222" align="center">
        {place}
      </Paragraph>
      <Paragraph
        size={1}
        fontWeight="bold"
        lineHeight={1.4}
        color="#222222"
        align="center"
      >
        {time}
      </Paragraph>
      <Paragraph
        margin="9px auto auto auto"
        size={1}
        lineHeight={1.4}
        color="#222222"
        align="center"
      >
        {currentPeople}명 / {maxPeople}명
      </Paragraph>
    </Container>
  </Wrapper>
);

Room.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  currentPeople: PropTypes.number.isRequired,
  maxPeople: PropTypes.number.isRequired,
};

export default Room;
