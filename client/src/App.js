import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Splash from './Components/Splash/Splash.js';
import SignUp from './Components/SignUp/SignUp.js';
import SignIn from './Components/SignIn/SignIn.js';
import UserPage from './Components/UserPage/UserPage.js';
import Browse from './Components/Browse/Browse.js';

class App extends Component {
  state = {
    isLoggedIn: false,
    human : {
      name: '',
      email: '',
      password: '',
    }
  }
  // Set user's logged in state here
  setLoggedIn = (data) => {
    this.setState({
      isLoggedIn: true,
      human: {
        name: data.name,
      },
    })
  }
  // Routing with React Router
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/sign-up/' render={(props) =>
            <SignUp {...props}
              username={this.state.human.name}
              email={this.state.human.email}
              password={this.state.human.password}
               />
          } />
          <Route exact path='/sign-in/' render={(props) =>
            <SignIn {...props}
              onSuccessfulSignIn={this.setLoggedIn}
              email={this.state.email}
              password={this.state.password}

              />
          } />
          <Route exact path='/user-page/' render={(props) =>
            <UserPage {...props}
              isLoggedIn={this.state.isLoggedIn}
              name={this.state.name}
              email={this.state.email}
              password={this.state.password} />
          } />
            <Route exact path='/browse/' render={(props) =>
              <Browse {...props}
              isLoggedIn={this.state.isLoggedIn} />
            } />
          </Switch>
      </div>
    );
  }
}

export default App;
