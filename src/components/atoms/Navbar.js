import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #ffffff;
`;

const Navbar = ({ children }) => <Wrapper>{children}</Wrapper>;

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
