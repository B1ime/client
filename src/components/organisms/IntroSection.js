import React from 'react';
import PropTypes from 'prop-types';
import { Title, Paragraph } from '../atoms';

const IntroSection = ({ index, title, description }) => (
  <div>
    <Title>{title}</Title>
    <Paragraph>{description}</Paragraph>
  </div>
);

IntroSection.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default IntroSection;
