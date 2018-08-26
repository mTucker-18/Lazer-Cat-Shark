import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <div className="CardBox">
        <div className="card">
          <img src="../../media/big_dog.jpg" alt=""/>
          <div className="container">
            <h4><b>Jane Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
            <p>Card stuff here</p>

        </div>
      </div>
    );
  }
}

export default Card;
