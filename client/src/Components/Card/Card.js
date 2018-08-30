import React, { Component } from 'react';
import PawButton from '../PawButton/PawButton.js';
import './Card.css';

class Card extends Component {
  render () {
    return (
      <div className='Card'>

        <div className="Card--image">
          <img src={""} alt="pictureProp" />
        </div>
        <div className="Card--text">
          <p>new match name: {this.props.newMatch} </p>
        </div>

        <div className="PawButtons">
          <PawButton
            buttonText="yaw"
            onClick={this.props.yesClick}
          />
          <PawButton
            buttonText="naw"
            onClick={this.props.noClick}
          />
        </div>

      </div>
    );
  }
}

export default Card;
