import React, { Component } from 'react';
import './Components.css';
import cancel from '../images/cancel.png'


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
				<button ><img src={cancel} id="cancel" onClick={this.goBack} ></img></button>

			</div>

		);
	};
}


export default Navbar;