import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.js';
import Card from '../Card/Card.js';
import './Browse.css';

class Browse extends Component {
  render () {
    return (
      <div className='Browse'>
        <div className='Browse--content'>
          <div className='Browse--nav'>
            <h1>find a doggo friend</h1>

            <Link to='/user-page/'>
              <Button>user page</Button>
            </Link>

            <Link to='/'>
              <Button>log out</Button>
            </Link>
          </div>

          <Card />

        </div>
      </div>
    );
  }
}

export default Browse;
