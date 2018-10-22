import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import plus from '../images/plus.png'
import './Components.css';

const NewRoom = () => (
  <Link to="/roomCreate">
    <div className="newroom">
      <img src={plus} className="plus"></img>
      <p>방 만들기</p>
    </div>
  </Link>
)

export default NewRoom;