import React, { Component } from 'react';
import Button from '../Button/button.js';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="CardBox">

        <div className="card">
          <div className="row">
            <div className="col-xs-6">
              <img src="../../media/big_dog_new.png" />
            </div>

            <div className="col-xs-6 side-front-content">
              <h4><b>Jane Doe</b></h4>
              <p>Architect & Engineer</p>
              <p>Cool and stuff</p>

              <Button>paw up</Button>
              <Button>paw down</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
