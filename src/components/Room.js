import React, { Component } from 'react';
import profile from '../images/profile.png'
import './Components.css';

const Room = () => (
    <div className="room">
        <p>방 이름</p>
        <img src={profile} className="profile"></img>



    </div>
)

export default Room;