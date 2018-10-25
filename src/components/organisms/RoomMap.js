import React, { Component } from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 100%;
  height: 285px;
  background-color: ${props => (props.error ? '#222222' : '#FFFFFF')};
`;

class RoomMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidMount = () => {
    if ('daum' in window) {
      const { daum } = window;
      const container = document.getElementById('map');
      const options = {
        // TODO Replace this with users' current location
        center: new daum.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      // eslint-disable-next-line
      const map = new daum.maps.Map(container, options);
    }
  };

  componentDidCatch = () => {
    this.setState({ error: true });
  };

  render() {
    const { error } = this.state;
    if (error) {
      return <MapWrapper error />;
    }
    return <MapWrapper id="map" />;
  }
}

export default RoomMap;
