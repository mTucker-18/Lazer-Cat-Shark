import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <h1 className="Splash--title">fetchr</h1>
        <p className="Splash--slogan">connecting dogs and dog lovers</p>
        <div>
          <Link to="/sign-up/">
            <button className="Button">
              Sign up
            </button>
          </Link>
        </div>
        <div>
          <Link to="/sign-in/">
            <button className="Button">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Splash;
