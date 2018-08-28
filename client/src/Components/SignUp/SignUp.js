import React, { Component } from 'react';
import './SignUp.css';
import Button from '../Button/button.js';
class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    radius: '',
    bio: '',
    dog_name: '',
    dog_size: '',
    dog_energy: '',
  }

  onSubmit = () => {
    const url = '/sign-up';
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: '',
      radius: '',
      likes: [],
      likedBy: [],
      bio: '',
      dog_name: '',
      dog_size: '',
      dog_energy: '',
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
      console.log("DATAMEOW", responseData)
    });
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
        <div className="InputFields">
          <h1 className="SignUp--title">join us to find friends for your doggos!</h1>
          <h2>name: {this.props.username}
          <input
            name="name"
            placeholder="enter your name"
            value={this.props.username}
            onChange={this.onNameChange}
          />
          </h2>

          <h2>email: {this.props.email}
            <input
              name="email"
              placeholder="enter email"
              value={this.props.email}
              onChange={this.onEmailChange}
            />
            </h2>

            <h2>password: {this.props.password}
            <input
              name="password"
              placeholder="create a password"
              value={this.props.password}
              onChange={this.onPasswordChange}
            />
            </h2>
          <Button onClick={this.onSubmit}>sign up</Button>
        </div>
      </div>
    );
  }
}

export default SignUp;
