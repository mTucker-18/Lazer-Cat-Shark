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
        <h1>Woof, Welcome Back!</h1>
          <h2>Email: {this.props.email}</h2>
          <input
              placeholder="Enter your email"
              value={this.props.email}
              onChange={this.onEmailChange}
            />
            <h2>Password: {this.props.name}</h2>
          <input
                placeholder="Enter your password"
                value={this.props.password}
                onChange={this.onPasswordChange}
              />
        <Button>Sign In</Button>
      </div>
    );
  }
}

export default SignIn;
