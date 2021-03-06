import React, { Component } from 'react';
import './SignIn.css';
import { Redirect } from 'react-router-dom';
import Button from '../Button/button.js';
import Browse from '../Browse/Browse.js';


class SignIn extends Component {
  state = {
    email: '',
    password: '',
    redirectTo: null
  }

  onSignIn = () => {
    const url = '/sign-in';
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        // console.log("response", responseData);
        if (responseData.superSuccessDog) {
          this.props.onSuccessfulSignIn({
            isLoggedIn: true,
            data: data,
          })
          this.setState({
            redirectTo: '/browse/'
          })
        }
        else {
          alert("Uh oh! Unsuccessful login. Try again.")
        }
        // console.log("going to", this.state.redirectTo);
      }
    );
  }

  onEmailChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      email: value,
    });
  }

  onPasswordChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      password: value,
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} render={(props) =>
        <Browse {...props} isLoggedIn={this.state.isLoggedIn} />
      } />
    } else {
    return (
      <div className="SignIn">
        <div className="InputFields">
          <h1 className="SignIn--title">woof! welcome back</h1>
            <h2>email:
            <input
              placeholder="enter your email"
              onChange={this.onEmailChange}
            />
            </h2>
            <h2>password:
            <input
              type="password"
              placeholder="enter your password"
              onChange={this.onPasswordChange}
            />
            </h2>
          <Button onClick={this.onSignIn}>sign in</Button>
        </div>
      </div>
    );
  }
  }
}

export default SignIn;
