import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './UserPage.css';
import Button from '../Button/button.js';

class UserPage extends Component {
  state = {
    isAccordianVisible: true,
    human : {
      searchRadius: 'update',
      name: 'Hien Phuong',
      email: 'some@email.com',
      password: 'update',
      address:'555 cool st, great town, CA',
      bio: 'I got a dog, do you?',
    },
    doggos : {
      dogName: 'Yippy',
      size: 'kinda small?',
      energyLevel: 'max',
      dogBio: "basically what you'd expect",
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
      human:{
        address: value,
        },
    });
    console.log('getting a new address:', this.state.human.address);
  }
  onGeoAddress = () => {

  console.log('button working')
  let addressWithPlusSigns = this.state.human.address.replace(/ /g, '+');
  console.log('this is the search parameters:', addressWithPlusSigns)

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressWithPlusSigns}&key=AIzaSyDfpGRTicou6rN_3Zsct8ipCKVBM-E_TTc`)
    .then(response => response.json())
    .then(data => {
      console.log("got data:", data);
      ///////// TODO post to db
      });
    }

    //results[""0""].geometry.location

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

  toggleLearnMore = () => {
    // if (this.state.isAccordianVisible === false) {
    //   this.setState({
    //     isAccordianVisible: true,
    //   })
    // } else {
    //   this.setState({
    //     isAccordianVisible: false,
    //   })
    // }
    console.log('hello');
    this.setState({
      isAccordianVisible: !this.state.isAccordianVisible,
    })
    console.log(this.state.isAccordianVisible);

  }


  render() {
    let toggleDivClass = "";
    let buttonText = "Edit Info ↓";
    let doggoStyle = {};

    if (this.state.isAccordianVisible === false) {
      buttonText = "Finished  ↑";
      doggoStyle = {
        height: "0",
      };
    } else {
      doggoStyle = {
        height: "800px",
      };
    }

    return (
      <div className="UserPage">

        <div className="Navigation">
          <h1>User Page</h1>
          <Link to="/browse/">
            <Button>Find a Friend!</Button>
          </Link>

          <Link to="/">
            <Button>Log Out</Button>
          </Link>
          <Button onClick={this.toggleLearnMore}>{buttonText}</Button>

        </div>


        <div className={'Human ' }>
          <h2>Human Info.</h2>
          <div className="Image">
          <p>name: {this.state.human.name}</p>
          <p>email: {this.state.human.email}</p>
          <p>address: {this.state.human.address}</p>
          <p>bio: {this.state.human.bio}</p>
        </div>


        <div style={doggoStyle} className={'Doggos '+ toggleDivClass}>
            <div>
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

            </h2>


            <h2>Bio: {this.props.bio}
              <input
                placeholder="Tell us about yourself"
                value={this.props.bio}
                onChange={this.onBioChange}
              />
            </h2>



          <div className="Image" >
            <h2>Dog Info.</h2>
            <p>Will have some image here</p>
          </div>

          <div>
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

            <Button onClick={this.onGeoAddress}>Save</Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
