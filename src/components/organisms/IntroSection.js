import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title, Paragraph } from '../atoms';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 11.11%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

const Icon = styled.img`
  margin-left: 3px;
  padding-top: 5px;
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: left;
`;

const IntroSection = ({
  linkTo, image, title, description,
}) => (
  <Wrapper>
    <SectionHeader>
      <Link to={linkTo}>
        <Title size={3} lineHeight={1.5} color="#4262f3">
          {title}
        </Title>
      </Link>
      <Icon src={image} alt="icon" />
    </SectionHeader>
    <Paragraph size={1.2} fowtWeight={300} lineHeight={1.5} color="#666666">
      {description}
    </Paragraph>
  </Wrapper>
);

IntroSection.propTypes = {
  linkTo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default IntroSection;
