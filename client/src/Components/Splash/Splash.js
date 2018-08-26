import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Splash.css';
import Button from '../Button/button.js';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">

        <h1 className="Splash--title">fetchr</h1>
        <p className="Splash--slogan">connecting dogs and dog lovers</p>
        <div>
          <Link to="/sign-up/">
            <Button className="Button">
              sign up
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/sign-in/">
            <Button className="Button">
              sign in
            </Button>
          </Link>
        </div>

      </div>
    );
  }
}

export default Splash;
