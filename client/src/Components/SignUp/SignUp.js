import React, { Component } from 'react';
import './SignUp.css';
import Button from '../Button/button.js';
class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    //geoCoord: '',
    picture: '',
    bio: '',
    dog_name: '',
    dog_size: '',
    dog_energy: '',
  }

  saveToSignUp = () => {
    const url = '/sign-up';
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      picture: this.state.picture,
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
    .then(data => {
        // AFTER save is here
        console.log('save was successful!', data);
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

  onGeoAddress = () => {

    console.log('button working')
    let addressWithPlusSigns = this.state.address.replace(/ /g, '+');
    console.log('this is the search parameters:', addressWithPlusSigns)

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressWithPlusSigns}&key=AIzaSyDfpGRTicou6rN_3Zsct8ipCKVBM-E_TTc`)
      .then(response => response.json())
      .then(data => {
        console.log("got data:", data);
        this.saveToSignup();
      });
  }
//results[""0""].geometry.location

  onPictureChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      picture: value,
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
                placeholder="enter your email"
                value={this.props.email}
                onChange={this.onEmailChange}
              />
            </h2>
            <h2>password: {this.props.password}
              <input
                type="password"
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
            <h3>(only you can see this)</h3>
            <h2>picture of you and your doggo: {this.props.picture}
              <input
                type="file"
                placeholder="dog-pic"
                value={this.props.picture}
                onChange={this.onPictureChange}
              />
            </h2>
            <h2>tell us about your dog: {this.props.bio}
              <textarea
                name="bio"
                placeholder="likes, dislikes, etc."
                value={this.props.bio}
                onChange={this.onBioChange}
              />
            </h2>
            <h2>dog name: {this.props.dog_name}
              <input
                name="dog_name"
                placeholder="dog name"
                value={this.props.dog_name}
                onChange={this.onDogNameChange}
              />
            </h2>
            <h2>dog size: {this.props.dog_size}
              <input
                name="dog_size"
                placeholder="small, medium, or large"
                value={this.props.dog_size}
                onChange={this.onDogSizeChange}
              />
            </h2>
            <h2>dog energy level: {this.props.dog_energy}
              <input
                name="dog_energy"
                placeholder="calm, bursts, or overactive?"
                value={this.props.dog_energy}
                onChange={this.onDogEnergyChange}
              />
            </h2>
            <Button onClick={this.onGeoAddress}>sign up</Button>
          
        </div>
      </div>
    );
  }
}

export default SignUp;
