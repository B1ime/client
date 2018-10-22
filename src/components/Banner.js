import React, { Component } from 'react';
import './Components.css';
//방 개수가 1개 이상일 경우
const Banner = () => (
  <div className="banner">
    <h1>반가워요!</h1>
    <p>오늘 나의 모임을 클릭 후 참여하기 버튼을 누르면
약속 시간 2시간 전부터 나의 현위치가 공개됩니다.
하나의 방에만 참여가 가능합니다 :) </p>
  </div>
)
export default Banner;