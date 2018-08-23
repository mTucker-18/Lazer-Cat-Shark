import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import Splash from './Components/Splash/Splash.js';
import SignUp from './Components/SignUp/SignUp.js';
import SignIn from './Components/SignIn/SignIn.js';
import UserPage from './Components/UserPage/UserPage.js';
import Browse from './Components/Browse/Browse.js';

class App extends Component {
  state = {
    human : {
      searchRadius: '',
      name: '',
      email: '',
      password: '',
      address:'',
      bio: '',
    },
    doggos : {
      name: '',
      size: '',
      energyLevel: '',
      bio: '',
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-navigation">
          <Link to="/">Splash</Link>
          <Link to="/sign-up/">Sign Up</Link>
          <Link to="/sign-in/">Sign In</Link>
          <Link to="/user-page/">My Info.</Link>
          <Link to="/browse/">Find a Friend</Link>
        </div>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/sign-up/' render={(props) =>
                 <SignUp {...props}
                   username={this.state.name}
                   email={this.state.email}
                   password={this.state.password} />
            } />
            <Route exact path='/sign-in/' render={(props) =>
                 <SignIn {...props}
                   email={this.state.email}
                   password={this.state.password} />
            } />
            <Route exact path='/user-page/' render={(props) =>
                 <UserPage {...props}
                   searchRadius={this.state.searchRadius}
                   name={this.state.name}
                   email={this.state.email}
                   password={this.state.password}
                   address={this.state.address}
                   bio={this.state.bio}
                   dogName={this.state.dogName}
                   size={this.state.size}
                   energyLevel={this.state.energyLevel}
                   dogBio={this.state.dogBio} />
            } />
            <Route path="/browse/" component={Browse} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
