import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render () {
    return (
      <div className='CardBox'>

        <div className="card">
          <img src={"../../media/small_dog.png"} alt="woman with small dog" />
          <div className="container">
            <h4><b>Jane Doe</b></h4>
            <p>Architect & Engineer</p>
            <p>Cool and stuff</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
