import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import Room from '../components/Room';
import NewRoom from '../components/NewRoom';
import './Pages.css';



class List extends Component{

    render(){
        const{name, num, location, onRemove}=this.props;
        return(
            <div>

            <Banner/>
                <div className="roomlist">
                    <NewRoom/>
                    <Room/>
                    <Room/>
                    <Room/>
                    
                </div>
            </div>
        )
    }
}
export default List;