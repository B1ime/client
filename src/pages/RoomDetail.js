import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Member from '../components/Member';
import Map from '../components/Map';
import './Pages.css';


class RoomDetail extends Component{

    render(){
        return(
            <div>
            <Navbar title="room detail"/>
            <Map />
                <div className="memberList">
                <p>클릭하면 지도에서 위치를 확인할 수 있어요.</p>
                    <Member/>
                    <Member/>
                </div>
                <img src="./images/participate.png"></img>
                <div className="footer">
                참여하기
               

                </div>
            </div>
        );
    }
}

export default RoomDetail;