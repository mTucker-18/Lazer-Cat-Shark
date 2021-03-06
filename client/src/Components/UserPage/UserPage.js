import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './UserPage.css';
import Button from '../Button/button.js';

class UserPage extends Component {

  state = {
    isAccordianVisible: false,
    human : {
      searchRadius: 'update',
      name: 'Hien Phuong',
      email: 'some@email.com',
      password: 'update',
      address:'555 cool st, great town, CA',
      bio: 'I got a dog, do you? Mine is happy go lucky, and very friendly. More stuff, blah blah blah. Email me!',
    },
    doggos : {
      dogName: 'Yippy',
      size: 'kinda small?',
      energyLevel: 'max',
      dogBio: "basically what you'd expect. He poops everywhere, eats all my shoes and barks all night long...",
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
      human:{
        address: value,
        },
    });
  }

  onGeoAddress = () => {
  let addressWithPlusSigns = this.state.human.address.replace(/ /g, '+');

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
  }

  ondogNameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dogName: value,
    });
  }

  onSizeChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      size: value,
    });
  }

  onEnergyLevelChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      energyLevel: value,
    });
  }

  ondogBioChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dogBio: value,
    });
  }

  toggleLearnMore = () => {
    this.setState({
      isAccordianVisible: !this.state.isAccordianVisible,
    })
  }

  render() {
    let toggleDivClass = "";
    let buttonText = "finished  ↑";
    let doggoStyle = {};

    if (this.state.isAccordianVisible === false) {
      buttonText = "edit info ↓";
      doggoStyle = {
        height: "0",
      };
    } else {
      doggoStyle = {
        height: "400px",
      };
    }

    return (
      <div className="UserPage">

        <h1 className="UserPage--title">my personal page</h1>

        <div className="Navigation">
          <Link to="/browse/">
            <Button>find a friend!</Button>
          </Link>
          <Link to="/">
            <Button>sign out</Button>
          </Link>
        </div>

        <div className="DisplayInfo">
          <h1>my information</h1>
          <div className="DisplayInfo--fields">
            <h2>name: {this.state.human.name}</h2>
            <h2>email: {this.state.human.email}</h2>
            <h2>address: {this.state.human.address}</h2>
            <h2>bio: {this.state.human.bio}</h2>
          </div>
          <img src="../../media/small_dog.png" alt="" />
        </div>

        <div className="Toggle">

          <div className="Toggle--button">
            <Button onClick={this.toggleLearnMore}>
              {buttonText}
            </Button>
          </div>

          <div style={doggoStyle} className={'Toggle--doggos '+ toggleDivClass}>

            <div className="HumanInfo">
              <h2>name: {this.props.username}
                <input
                  placeholder="enter new name"
                  value={this.props.username}
                  onChange={this.onNameChange}
                />
              </h2>
              <h2>email: {this.props.email}
                <input
                  placeholder="enter new email"
                  value={this.props.email}
                  onChange={this.onEmailChange}
                />
              </h2>
              <h2>password: {this.props.name}
                <input
                  placeholder="enter new password"
                  value={this.props.password}
                  onChange={this.onPasswordChange}
                />
              </h2>
              <h2>address: {this.props.address}
                <input
                  placeholder="enter address"
                  value={this.props.address}
                  onChange={this.onAddressChange}
                />
              </h2>
              <h2>bio: {this.props.bio}
                <input
                  placeholder="tell us about yourself"
                  value={this.props.bio}
                  onChange={this.onBioChange}
                />
              </h2>
            </div>

            <div className="DogInfo">
              <h2>dog name: {this.props.dogName}
                <input
                  placeholder="enter your dog's name"
                  value={this.props.dogName}
                  onChange={this.ondogNameChange}
                />
              </h2>
              <h2>size: {this.props.size}
                <input
                  placeholder="how big is your dog?"
                  value={this.props.size}
                  onChange={this.onSizeChange}
                />
              </h2>
              <h2>energy level: {this.props.energy}
                <input
                  placeholder="how energetic is your dog?"
                  value={this.props.energyLevel}
                  onChange={this.onEnergyLevelChange}
                />
              </h2>
              <h2>bio: {this.props.dogBio}
                <input
                  placeholder="tell us a bit about your dog"
                  value={this.props.dogBio}
                  onChange={this.ondogBioChange}
                />
              </h2>
            </div>

            <div className="SaveButton">
              <Button onClick={this.onGeoAddress}>save</Button>
            </div>
          </div>
        </div>

        <div className="DisplayInfo--dog">
          <h1>my dog information</h1>
          <div className="DisplayInfo--fields">
            <h2>name: {this.state.doggos.dogName}</h2>
            <h2>size: {this.state.doggos.size}</h2>
            <h2>energy level: {this.state.doggos.energyLevel}</h2>
            <h2>bio: {this.state.doggos.dogBio}</h2>
          </div>
        </div>

      </div>
    );
  }
}

export default UserPage;
