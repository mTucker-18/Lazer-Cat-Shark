import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import Splash from './Components/Splash/Splash.js';
import SignUp from './Components/SignUp/SignUp.js';
import SignIn from './Components/SignIn/SignIn.js';
import UserPage from './Components/UserPage/UserPage.js';
import Browse from './Components/Browse/Browse.js';

class App extends Component {
  render() {
    return (
      <div className=".App">

        <div className=".App-navigation">

          <h1 className=".App-title">Fetchr</h1>
          <Link to="/">Splash</Link>
          <Link to="/sign-up/">Sign Up</Link>
          <Link to="/sign-in/">Sign In</Link>
          <Link to="/user-page/">My Info.</Link>
          <Link to="/browse/">Find a Friend</Link>
          
        </div>

        <div className="App-mainContent">

          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/sign-up/' component={SignUp} />
            <Route exact path='/sign-in/' component={SignIn} />
            <Route exact path='/user-page/' component={UserPage} />
            <Route path="/browse/" component={Browse} />
          </Switch>

        </div>

      </div>
    );
  }
}

export default App;
