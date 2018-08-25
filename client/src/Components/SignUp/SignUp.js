import React, { Component } from 'react';
import './SignUp.css';
class SignUp extends Component {
  state = {
    name: '',
    emails: '',
    password: '',
  }
  onSubmit = (url = '/sign-up', data = {}) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(console.log(data));
  }
  onNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      name: value,
    });
    console.log('getting a new name:', value);
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
      <div className="SignUp">
        <h1>Join us to find friends for your doggos!</h1>
        <h2>Name: {this.props.username}</h2>
        <input
            name="human_name"
            placeholder="Enter your name"
            value={this.props.username}
            onChange={this.onNameChange}
          />

          <h2>Email: {this.props.email}</h2>
          <input
              name="email"
              placeholder="Enter your email"
              value={this.props.email}
              onChange={this.onEmailChange}
            />

            <h2>Password: {this.props.name}</h2>
          <input
                name="password"
                placeholder="Enter your password"
                value={this.props.password}
                onChange={this.onPasswordChange}
              />
        <button onClick={this.onSubmit}>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
