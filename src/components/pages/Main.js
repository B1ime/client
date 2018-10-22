import React, { Component } from 'react';
import MainLayout from '../templates/MainLayout';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="second">
        <MainLayout />
        <div className="center">
          <Link to="/roomCreate">
            <div className="new-room">
              새로운 모임을 만들었다면?
              <p>방만들기</p>
            </div>
          </Link>
          <Link to="list">
            <div className="join-room">
              이미 모임이 있다면?
              <p>방 참여하기</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
