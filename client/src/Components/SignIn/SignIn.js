import React, { Component } from 'react';
import './SignIn.css';
import { Switch, Route } from 'react-router-dom';
import Button from '../Button/button.js';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    redirectTo: null
  }
  onSubmit = () => {
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
        console.log("response", responseData);
        if (responseData.superSuccessDog) {
          this.props.onSuccessfulSignIn({
            isLoggedIn: true,
            data: data,
          })
          this.setState({
            redirectTo: '/browse-page'
          })
        }
        console.log("going to", this.state.redirectTo);
      }
    );
  }

  onEmailChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      email: value,
    });
    console.log('getting a new email:', value);
  }

  onPasswordChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      password: value,
    });
    console.log('getting a new password:', value);
  }
  render() {
    if (this.state.redirectTo) {
            return <Route exact path={this.state.redirectTo} />
        } else {
    return (
      <div className="SignIn">
        <div className="InputFields">
          <h1 className="SignIn--title">woof! welcome back</h1>
            <h2>email: {this.props.email}
            <input
              placeholder="enter your email"
              value={this.props.email}
              onChange={this.onEmailChange}
            />
            </h2>
            <h2>password: {this.props.name}
            <input
              type="password"
              placeholder="enter your password"
              value={this.props.password}
              onChange={this.onPasswordChange}
            />
            </h2>
          <Button onClick={this.onSubmit}>sign in</Button>
        </div>
      </div>
    );
  }
  }
}

export default SignIn;
