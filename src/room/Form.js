import React, {Component} from 'react';
import './room.css'


class Form extends Component{

    render(){
        return(
            
            <div className="all">
                <p>방만들기</p>
                <form>
                    <div className="form-group">
                      <label for="exampleInputEmail1">방 이름</label>
                      <input type="ㅜname" className="form-control"placeholder="방 이름"/>
                    </div>
                    <hr/>
                        <div className="form-group" id="num">
                        <label for="inputState">참여인원</label>
                        <select id="imputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        </select>
                        </div>
                        <div className="form-group" id="time">
                           <label for="inputPassword4">약속시간</label>
                           <input type="password" className="form-control" id="inputPassword4"/>
                        
                           </div>
                        <div id="clear">""</div>
                         <hr/>
      
                           <label>리스트 색상</label><br/>
                            <input type="radio" name="color1" value="red"/>
                            <input type="radio" name="color2" value="orange"/>
                            <input type="radio" name="color3" value="yellow"/>
                            <input type="radio" name="color4" value="green"/>
                            <input type="radio" name="color5" value="blue"/>
                            <input type="radio" name="color6" value="navy"/>
                            <input type="radio" name="color6" value="purple"/>

                        <div >
                        <hr/>
                            <label>오늘의 장소</label>
                            <div id="map">지도</div>

                        </div>

                     
                    
                    <button type="submit">방 만들기</button>

                </form>
         

            
            </div>
        )
    }
}
export default Form;