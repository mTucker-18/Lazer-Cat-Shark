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
      address: this.state.address,
      radius: this.state.radius,
      likes: [],
      likedBy: [],
      bio: this.state.bio,
      dog_name: this.state.dog_name,
      dog_size: this.state.dog_size,
      dog_energy: this.state.dog_energy,
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
      console.log("DATA", responseData)
    });
  }

  onNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      name: value,
    });
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

  onAddressChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      address: value,
    });
  }
  onRadiusChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      radius: value,
    });
  }
  onBioChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      bio: value,
    });
  }
  onDogNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dog_name: value,
    });
  }
  onDogSizeChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dog_size: value,
    });
    console.log(value);
  }
  onDogEnergyChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dog_energy: value,
    });
  }
  render() {
    return (
      <div className="SignUp">
        <div className="InputFields">
          <h1 className="SignUp--title">join us to find friends for your doggos!</h1>
          <h2>your name: {this.props.username}
            <input
              name="name"
              placeholder="enter your name"
              value={this.props.username}
              onChange={this.onNameChange}
            />
          </h2>
          <h2>your email: {this.props.email}
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
          <h2>your address: {this.props.address}
            <input
              name="address"
              placeholder="create a password"
              value={this.props.address}
              onChange={this.onAddressChange}
            />
          </h2>
          <h3>(This is not shared)</h3>
          <h2>how close should dog friends be? {this.props.radius}
            <input
              name="radius"
              placeholder="miles"
              value={this.props.radius}
              onChange={this.onRadiusChange}
            />
          </h2>
          <h2>tell us about you and your dog: {this.props.bio}
            <textarea
              name="bio"
              placeholder="Likes, dislikes, etc."
              value={this.props.bio}
              onChange={this.onBioChange}
            />
          </h2>
          <h2>dog name: {this.props.dog_name}
            <input
              name="dog_name"
              placeholder="Dog name"
              value={this.props.dog_name}
              onChange={this.onDogNameChange}
            />
          </h2>
          <h2>dog size: {this.props.dog_size}
            <input
              name="dog_size"
              placeholder="Small, medium, or large"
              value={this.props.dog_size}
              onChange={this.onDogSizeChange}
            />
          </h2>
          <h2>dog energy level: {this.props.dog_energy}
            <input
              name="dog_energy"
              placeholder="Peaceful, super active, etc."
              value={this.props.dog_energy}
              onChange={this.onDogEnergyChange}
            />
          </h2>
          <Button onClick={this.onSubmit}>sign up</Button>
        </div>
      </div>
    );
  }
}

export default SignUp;
