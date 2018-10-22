import React, { Component } from 'react';
import './Components.css';
import reload from '../images/reload.png';
import cancel from '../images/cancel.png';
import back from '../images/back.png';

class Navbar extends Component {
  goBack = () => {
    window.history.back();
  };
  reload = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="navbar">
        <button onClick={this.goBack}>
          <img src={back} id="back" />
        </button>
        <p id="title">{this.props.title}</p>
        <button onClick={this.reload}>
          <img src={reload} id="reload" />
        </button>
        <button>
          <img src={cancel} id="cancel" />
        </button>
      </div>
    );
  }
}

export default Navbar;
