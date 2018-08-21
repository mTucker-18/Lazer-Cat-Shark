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
        <h2>Name: {this.state.name}</h2>
        <input
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.onNameChange}
          />

          <h2>Name: {this.state.emails}</h2>
          <input
              placeholder="Enter your name"
              value={this.state.email}
              onChange={this.onEmailChange}
            />

            <h2>Name: {this.state.name}</h2>
          <input
                placeholder="Enter your name"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
        <button>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
