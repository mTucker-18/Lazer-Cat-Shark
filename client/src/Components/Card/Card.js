import React, { Component } from 'react';
import PawButton from '../PawButton/PawButton.js';
import './Card.css';

class Card extends Component {
  render () {
    return (
      <div className='Card'>

        <div className="Card--image">
          <img src={this.props.picture} alt="" />
        </div>
        <div className="Card--text">
          <p>name: {this.props.newMatchName} </p>
          <p>proximity: {this.props.newMatchLocation} </p>
          <p>bio: {this.props.newMatchBio} </p>
          <p>dog name: {this.props.newMatchDogName} </p>
          <p>dog size: {this.props.newMatchDogSize} </p>
          <p>energy: {this.props.newMatchDogEnergy} </p>
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
