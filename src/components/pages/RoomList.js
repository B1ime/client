import React, { Component } from 'react';
import { Banner, Room, NewRoom } from '../../components';
import './Pages.css';

//room의 개수만큼 생성
//room의 개수가 0일 때는 리스트 페이지에 방 추가하는 칸만 나타난다.

class List extends Component {

  render() {
    const { name, num, location, onRemove } = this.props;

    //만약 방의 개수가 0이면
    /*return(
        <NewRoom/>

    )
    else{
        */
    return (
      <div>
        <Banner />
        <div className="roomlist">
          <NewRoom />
          <Room />
          <Room />
          <Room />
        </div>
      </div>
    )
  }
}
export default List;