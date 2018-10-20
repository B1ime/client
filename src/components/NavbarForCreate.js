import React, { Component } from 'react';
import './Components.css';
import reload from '../images/reload.png'
import cancel from '../images/cancel.png'
import back from '../images/back.png'


class Navbar extends Component {
    goBack = () => {
        window.history.back();
    }
    reload = () => {
        window.location.reload();
    }
    render() {
        return (
            <div className="navbarForCreate">
                <button ><img src={cancel} id="cancel" ></img></button>

            </div>

        );
    };
}


export default Navbar;