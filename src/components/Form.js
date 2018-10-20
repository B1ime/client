import React, { Component } from 'react';
import './Components.css';


class Form extends Component {

  render() {
    return (
      <div>
        <div className="name">
          <label>방 이름</label>
          <p>우리 팀을 알릴 수 있는 이름을 지어보세요! (10자 이내)</p>
          <input type="ㅜname" onChange={this.handleNameChange} className="form-control" placeholder="방 이름" />
        </div>
        <div className="numandtime">
          <div className="num">
            <label>참여인원</label>
            <p>최대 10명까지 가능해요.</p>
            <select id="selectnum" onChange={this.handleNumChange} >
              <option selected>1명</option>
              <option value="2">2명</option>
              <option value="3">3명</option>
              <option value="4">4명</option>
              <option value="5">5명</option>
              <option value="6">6명</option>
              <option value="7">7명</option>
              <option value="8">8명</option>
              <option value="9">9명</option>
              <option value="10">10명</option>

            </select>
          </div>
          <div className="time">
            <label>약속시간</label>
            <p>언제가 좋을까요?</p>
            <input type="time" id="appt-time" name="appt-time" min="00:00" max="18:00" />

          </div>
        </div>
      </div>
    )
  }
}



export default Form