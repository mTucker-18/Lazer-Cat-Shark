import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Browse.css';

class Browse extends Component {
  render() {
    return (
      <div className="Browse">
        <h1>Find a pup!</h1>
        <p>(Puppy and Person info. here.)</p>

        <Link to="/user-page/">
          <button>User Page</button>
        </Link>

        <Link to="/">
          <button>Log Out</button>
        </Link>

      </div>
    );
  }
}

export default Browse;
