import React, { Component } from 'react';
import './SignIn.css';
class SignIn extends Component {
  state = {
    emails: '',
    password: '',
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
        <button>Sign In</button>
      </div>
    );
  }
}

export default SignIn;
