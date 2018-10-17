import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './container.css';


class Second extends Component{

    render(){
        return(
            
            <div className="second">
                <div className="center">
                    <Link to="/form"><div className="new-room">새로운 모임을 만들었다면?<p>방만들기</p></div></Link>
                    <Link to="list"><div className="join-room">이미 모임이 있다면?<p>방 참여하기</p></div></Link>
                </div>



            </div>
        )
    }
}

export default Second;