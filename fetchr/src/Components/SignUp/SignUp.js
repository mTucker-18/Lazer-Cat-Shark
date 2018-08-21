import React, { Component } from 'react';
import './SignUp.css';
class SignUp extends Component {
  onNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      name: value,
    });
    console.log('getting a new value:', value);
  }

  onEmailChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      email: value,
    });
    console.log('getting a new value:', value);
  }

  onPasswordChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      password: value,
    });
    console.log('getting a new position:', value);
  }
  render() {
    return (
      <div className=".SignUp">
        <h1>Welcome</h1>
        <h2>Name: {this.props.username}</h2>
        <input
            placeholder="Enter your name"
            value={this.props.username}
            onChange={this.onNameChange}
            // console.log(value)
          />

          <h2>Email: {this.props.email}</h2>
          <input
              placeholder="Enter your name"
              value={this.props.email}
              onChange={this.onEmailChange}
            />

            <h2>Password: {this.props.name}</h2>
          <input
                placeholder="Enter your name"
                value={this.props.password}
                onChange={this.onPasswordChange}
              />
        <button>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
