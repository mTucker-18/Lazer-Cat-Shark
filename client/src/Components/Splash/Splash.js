import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <h1>fetchr</h1>
        <p>Connecting dogs and dog lovers</p>

        <Link to="/sign-up/">
          <button>
            Sign Up
          </button>
        </Link>

        <Link to="/sign-in/">
          <button>
            Sign In
          </button>
        </Link>

      </div>
    );
  }
}

export default Splash;
