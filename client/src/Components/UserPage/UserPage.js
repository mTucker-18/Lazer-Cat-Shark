import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
  onGeoAddress = () => {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDfpGRTicou6rN_3Zsct8ipCKVBM-E_TTc")
    .then(response => response.json())
    .then(data => {
      console.log("got data", data);
      ///////// TODO post to db
      });
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

        <div className="Navigation">

          <Link to="/browse/">
            <button>Find a Friend!</button>
          </Link>

          <Link to="/">
            <button>Log Out</button>
          </Link>

        </div>

        <h2>Human Info.</h2>

        <div className="Human">

          <div className="Image">
            <p>Will have some image here</p>
          </div>

          <div className="TextField">
            <h2>Search Radius: {this.props.searchRadius}
              <input
                placeholder="Enter your search radius"
                value={this.props.searchRadius}
                onChange={this.onSearchRadiusChange}
              />
            </h2>

            <h2>Name: {this.props.username}
              <input
                placeholder="Enter name"
                value={this.props.username}
                onChange={this.onNameChange}
              />
            </h2>

            <h2>Email: {this.props.email}
              <input
                placeholder="Enter email"
                value={this.props.email}
                onChange={this.onEmailChange}
              />
            </h2>

            <h2>Password: {this.props.name}
              <input
                placeholder="Enter password"
                value={this.props.password}
                onChange={this.onPasswordChange}
              />
            </h2>

            <h2>Address: {this.props.address}
              <input
                placeholder="Enter address"
                value={this.props.address}
                onChange={this.onAddressChange}
              />
              <button onClick={this.onGeoAddress}> Get API data
                 </button>
            </h2>


            <h2>Bio: {this.props.bio}
              <input
                placeholder="Tell us about yourself"
                value={this.props.bio}
                onChange={this.onBioChange}
              />
            </h2>

          </div>
        </div>

        <hr />

        <h2>Dog Info.</h2>

        <div className="Doggos">

          <div className="Image">
            <p>Will have some image here</p>
          </div>

          <div className="TextField">
            <h2>Name: {this.props.dogName}
              <input
                placeholder="Enter your password"
                value={this.props.dogName}
                onChange={this.ondogNameChange}
              />
            </h2>

            <h2>Size: {this.props.size}
              <input
                placeholder="Choose your doggy size"
                value={this.props.size}
                onChange={this.onSizeChange}
              />
            </h2>

            <h2>Energy Level: {this.props.energy}
              <input
                placeholder="What's your doggys energy level"
                value={this.props.energyLevel}
                onChange={this.onEnergyLevelChange}
              />
            </h2>

            <h2>Bio: {this.props.dogBio}
              <input
                placeholder="Tell us a little bit about your dog"
                value={this.props.dogBio}
                onChange={this.ondogBioChange}
              />
            </h2>
          </div>
        </div>

      </div>
    );
  }
}

export default UserPage;
