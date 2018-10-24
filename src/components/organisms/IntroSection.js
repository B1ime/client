import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title, Paragraph } from '../atoms';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 40px;
  padding-top: 105px;
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

const IntroSection = ({ image, title, description }) => (
  <Wrapper>
    <SectionHeader>
      <Title size={3} lineHeight={1.5} color="#4262f3">
        {title}
      </Title>
      <Icon src={image} alt="icon" />
    </SectionHeader>
    <Paragraph size={1.2} fowtWeight={300} lineHeight={1.5} color="#666666">
      {description}
    </Paragraph>
  </Wrapper>
);

IntroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default IntroSection;
