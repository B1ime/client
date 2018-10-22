import React, { Component } from 'react';
import './Components.css';

class Form extends Component {
  render() {
    return (
      <div>
        <div className="name">
          <label>방 이름</label>
          <p>우리 팀을 알릴 수 있는 이름을 지어보세요! (10자 이내)</p>
          <input
            type="name"
            onChange={this.handleNameChange}
            className="form-control"
            placeholder="방 이름"
          />
        </div>
        <div className="numandtime">
          <div className="num">
            <label>참여인원</label>
            <p>최대 10명까지 가능해요.</p>
            <div className="selectNum">
              <select onChange={this.handleNumChange}>
                <option selected value="1">
                  1명
                </option>
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
          </div>
          <div className="time">
            <label>약속시간</label>
            <p>언제가 좋을까요?</p>
            <div className="selectTime">
              <select id="ampm" onChange={this.handleNumChange}>
                <option selected value="am">
                  오전
                </option>
                <option value="pm">오후</option>
              </select>
              <select id="hour" onChange={this.handleNumChange}>
                <option selected value="1">
                  1시
                </option>
                <option value="2">2시</option>
                <option value="3">3시</option>
                <option value="4">4시</option>
                <option value="5">5시</option>
                <option value="6">6시</option>
                <option value="7">7시</option>
                <option value="8">8시</option>
                <option value="9">9시</option>
                <option value="10">10시</option>
                <option value="11">11시</option>
                <option value="12">12시</option>
              </select>
              <select id="minute" onChange={this.handleNumChange}>
                <option selected value="0">
                  00분
                </option>
                <option value="5">05분</option>
                <option value="10">10분</option>
                <option value="15">15분</option>
                <option value="20">20분</option>
                <option value="25">25분</option>
                <option value="30">30분</option>
                <option value="35">35분</option>
                <option value="40">40분</option>
                <option value="45">45분</option>
                <option value="50">50분</option>
                <option value="55">55분</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
