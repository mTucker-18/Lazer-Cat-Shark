import React, { Component } from 'react';
import './SignIn.css';

import Button from '../Button/button.js';

class SignIn extends Component {
  state = {
    emails: '',
    password: '',
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
    .then(
      // method for authentication
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
    return (
      <div className="SignIn">
        <div className="InputFields">
          <h1 className="SignIn--title">woof! welcome back</h1>
            <h2>email: {this.props.email}
            <input
              placeholder="Enter your email"
              value={this.props.email}
              onChange={this.onEmailChange}
            />
            </h2>
            <h2>password: {this.props.name}
            <input
              placeholder="Enter your password"
              value={this.props.password}
              onChange={this.onPasswordChange}
            />
            </h2>
          <Button>sign in</Button>
        </div>
      </div>
    );
  }
}

export default SignIn;
