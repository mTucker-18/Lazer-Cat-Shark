import React, { Component } from 'react';
import './PawButton.css';

class PawButton extends Component {

  render() {
    return (
        <button className="PawButton" onClick={this.props.onClick}>
          <img src="../../media/paw_image.png" alt="dog paw" />
        </button>
    );
  }
}

export default PawButton;
