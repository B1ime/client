import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './container.css'


class Main extends Component{

    render(){
        return(
            
            <div className="main">

             <div className="logo">
             <p>be one time</p>

             </div>
            
             <div className="buttons">
                
                 <button type="button" id="button1" className="btn btn-warning"> <Link to="//google.com">kakao 로그인</Link></button>
                 <button type="button" id="button2" className="btn btn-success"><Link to="//google.com">naver 로그인</Link></button>
                 <button type="button" id="button3" className="btn btn-primary"><Link to ="//google.com">google 로그인</Link></button>
             
             </div>
            </div>
        );
    }
}

export default Main;