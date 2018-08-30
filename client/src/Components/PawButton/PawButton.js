import React, { Component } from 'react';
import './PawButton.css';

class PawButton extends Component {

  render() {
    return (
        <button className="PawButton" onClick={this.props.onClick}>{this.props.buttonText}
        </button>
    );
  }
}

export default PawButton;
