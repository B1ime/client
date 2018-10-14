import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './room.css';



class List extends Component{

    render(){
        return(
            <div>
            <div className="box">
                <p>반가워요!</p>
                들어가고 싶은 방을 클릭하면 지금 바로 참여할 수 있습니다.
                참여와 동시 목표시간으로 2시간 전부터 나의 현위치가 공개됩니다.
            </div>
            <div className="room-list">

            <div id="room1">미프 1</div>

            <div id="room2">미프 2</div>

            <div id="room3">미프 3</div>


            <Link to="/form"><div id="new">방 만들기</div></Link>
            </div></div>
        )
    }
}
export default List;