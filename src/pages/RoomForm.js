import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import ColorPicker from '../components/ColorPicker';

import './Pages.css';

class RoomForm extends Component {
    
  
    render(){
        return(
            <div className="RoomForm">
            <Navbar/>
            <h1>방 만들기</h1>
            <form >
                <Form/>
                <ColorPicker />
                <div >
                    <label>오늘의 장소</label>
                    <div className="map">지도</div>
                </div>
            <input type="submit" value="방 만들기"/>
            </form>  
          </div>
        )
    }
  }

export default RoomForm;