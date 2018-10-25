import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Back from './images/BackButton.png';
import Close from './images/CloseButton.png';
import Reload from './images/ReloadButton.png';
import Navbar from '../atoms/Navbar';

const Button = styled.button`
  width: 18px;
  height: 18px;
  padding: 0;
  margin-left: ${props => (props.margin ? `${props.margin}px` : 0)};
`;

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const NavbarTitle = styled.p`
  margin-left: 116.2px;
  font-size: 1.4em;
  line-height: 1.43;
  color: #222222;
`;

const ReloadButton = styled(Button)`
  margin-left: 88.2px;
  border: 1px solid #4262f3;
  background-color: #4262f3;
  border-radius: 50%;
  img {
    max-height: 80%;
    margin-top: 1px;
  }
`;

class RoomDetailNavbar extends Component {
  static propTypes = {
    roomName: PropTypes.string.isRequired,
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { roomName } = this.props;
    return (
      <Navbar>
        <Button type="button" margin={21} onClick={this.goBack}>
          <ButtonImage src={Back} alt="back-arrow" />
        </Button>
        <NavbarTitle>{roomName}</NavbarTitle>
        <ReloadButton type="button" onClick={this.handleReload}>
          <img src={Reload} alt="reload-sign" />
        </ReloadButton>
        <Button type="button" margin={14.7}>
          <ButtonImage src={Close} alt="x-mark" />
        </Button>
      </Navbar>
    );
  }
}

export default RoomDetailNavbar;
