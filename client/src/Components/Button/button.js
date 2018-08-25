import React, { Component } from 'react';
import './button.css';
class Button extends Component {

  render() {
    return (
      <button className="Button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
