import React, { Component } from 'react';
import makeroom from '../../images/makeroom.png';
import { Form, ColorPicker, NavbarForCreate } from '../../components';
import './Pages.css';

class RoomCreate extends Component {
  render() {
    return (
      <div className="RoomCreate">
        <NavbarForCreate />
        <div className="RoomForm">
          <h1>방 만들기</h1>
          <form>
            <Form />
            <div className="location">
              <label>약속 장소</label>
              <p>
                멤버의 현재 위치와 예상 도착시간은 2시간 전부터 노출됩니다.
                <br />
                약속 장소에 도달한 경우 자동으로 방에서 나가게 됩니다.
              </p>
              <div className="location-map" />
            </div>
            <ColorPicker />
          </form>
        </div>
        <button type="submit">
          <img src={makeroom} alt="Submit" id="submit" />
        </button>
      </div>
    );
  }
}

export default RoomCreate;
