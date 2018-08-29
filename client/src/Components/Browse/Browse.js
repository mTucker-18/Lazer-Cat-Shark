import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.js';
import Card from '../Card/Card.js';
import './Browse.css';

class Browse extends Component {
  render () {
    return (
      <div className='Browse'>

        <div className='Browse--title'>
          <h1>find a doggo friend</h1>
        </div>

        <div className='Browse--nav'>
          <Link to='/user-page/'>
            <Button>user page</Button>
          </Link>

          <Link to='/'>
            <Button>log out</Button>
          </Link>
        </div>

        <div className="CardDisplay">
          <Card
            // picture={this.props.human.picture}
            // username={this.props.human.name}
            // bio={this.props.human.bio}
            // dogName={this.props.doggos.dogName}
            // size={this.props.doggos.size}
            // energy={this.props.doggos.energyLevel}
            // dogBio={this.props.doggos.dogBio}
          />
        </div>


      </div>
    );
  }
}

export default Browse;
