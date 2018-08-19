import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component {
  render() {
    return (
      <div className=".Splash">
        <h1>Fetchr</h1>
        <p>Connecting dogs and dog lovers</p>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    );
  }
}

export default Splash;
