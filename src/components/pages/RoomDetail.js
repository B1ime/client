import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FullScreenWrapper } from '../atoms/Wrappers';
import { RoomDetailLayout } from '../templates';
import './Pages.css';

class RoomDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.node,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { match } = this.props;
    return (
      <FullScreenWrapper>
        <RoomDetailLayout roomName={match.params.slug} />
      </FullScreenWrapper>
    );
  }
}

export default RoomDetail;
