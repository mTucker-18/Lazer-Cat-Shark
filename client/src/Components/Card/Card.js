import React, { Component } from 'react';
import PawButton from '../PawButton/PawButton.js';
import './Card.css';

class Card extends Component {
  render () {
    return (
      <div className='Card'>

        <div className="Card--image">
          <img src={"../../media/small_dog.png"} alt="pictureProp" />
        </div>
        <div className="Card--text">
          <h4><b>nameProp: Jane Doe</b></h4>
          <p>bioProp: Architect & Engineer</p>
          <p>more bioProp: Cool and stuff, propably good at things</p>
          <p><b>dogNameProp: Ruffers</b></p>
          <p>dogSizeProp: hudge!</p>
          <p>dogEnergyProp: insanely ennergetic</p>
          <p>dogBioProp: Ruffers is a great dog, cept he poops
           everywhere... and i mean EVERYWHERE!!! if we hang out you-ll probably get poo-ed on</p>
           //Prop for distance of user away from browser
        </div>

        <div className="PawButtons">
          <PawButton />
          <PawButton />
        </div>

      </div>
    );
  }
}

export default Card;
