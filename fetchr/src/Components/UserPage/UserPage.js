import React, { Component } from 'react';
import './UserPage.css';
class UserPage extends Component {
  state = {
    human : {
      searchRadius: '',
      name: '',
      email: '',
      password: '',
      address:'',
      bio: '',
    },
    doggos : {
      dogName: '',
      size: '',
      energyLevel: '',
      dogBio: '',
    }
  }
  onSearchRadiusChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      searchRadius: value,
    });
    console.log('getting a new search radius:', value);
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
  onAddressChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      address: value,
    });
    console.log('getting a new address:', value);
  }
  onBioChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      bio: value,
    });
    console.log('getting a new bio:', value);
  }
  ondogNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dogName: value,
    });
    console.log('getting a doggy name:', value);
  }
  onSizeChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      size: value,
    });
    console.log('getting a new password:', value);
  }
  onEnergyLevelChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      energyLevel: value,
    });
    console.log('getting energy level:', value);
  }
  ondogBioChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dogBio: value,
    });
    console.log('getting a new dog bio:', value);
  }
  render() {
    return (
      <div className="UserPage">
        <h1>User Page</h1>
        <div className="Human">
          <div className="Image">
            <p>Will have some image here</p>
          </div>
          <div className="TextField">
            <h2>Search Radius: {this.props.searchRadius}</h2>
              <input
                  placeholder="Enter your search radius"
                  value={this.props.searchRadius}
                  onChange={this.onSearchRadiusChange}
                />

              <h2>Name: {this.props.username}</h2>
            <input
                placeholder="Enter your name"
                value={this.props.username}
                onChange={this.onNameChange}
              />

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

            <h2>Address: {this.props.address}</h2>
          <input
                placeholder="Enter your address"
                value={this.props.address}
                onChange={this.onAddressChange}
              />
            <h2>Bio: {this.props.bio}</h2>
          <input
                placeholder="Tell us about yourself"
                value={this.props.bio}
                onChange={this.onBioChange}
              />
          </div>
        </div>
        <div className="Doggos">
          <div className="Image">
            <p>Will have some image here</p>
          </div>
          <div className="TextField">
            <h2>Name: {this.props.dogName}</h2>
          <input
                placeholder="Enter your password"
                value={this.props.dogName}
                onChange={this.ondogNameChange}
              />

            <h2>Size: {this.props.size}</h2>
          <input
                placeholder="Choose your doggy size"
                value={this.props.size}
                onChange={this.onSizeChange}
              />
            <h2>Energy Level: {this.props.energy}</h2>
          <input
                placeholder="What's your doggys energy level"
                value={this.props.energyLevel}
                onChange={this.onEnergyLevelChange}
              />
            <h2>Bio: {this.props.dogBio}</h2>
          <input
                placeholder="Tell us a little bit about your dog"
                value={this.props.dogBio}
                onChange={this.ondogBioChange}
              />
          </div>
        </div>

      </div>
    );
  }
}

export default UserPage;
