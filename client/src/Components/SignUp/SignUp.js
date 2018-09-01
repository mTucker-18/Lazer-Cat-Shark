import React, { Component } from 'react';
import './SignUp.css';
import Button from '../Button/button.js';
class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    address: '',
    // geoCoord: '',
    picture: '',
    latitude: '',
    longitude: '',
    bio: '',
    dog_name: '',
    dog_size: '',
    dog_energy: '',
  }

  saveToSignUp = (latitude, longitude) => {
    const url = '/sign-up';
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      picture: this.state.picture,
      latitude: latitude,
      longitude: longitude,
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
  //let latitude= results[0].geometry.location.lat();
    let addressWithPlusSigns = this.state.address.replace(/ /g, '+');

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressWithPlusSigns}&key=AIzaSyDfpGRTicou6rN_3Zsct8ipCKVBM-E_TTc`)
      .then(response => response.json())
      .then(data => {
        console.log("got data:", data);
        let latitude = data.results[0].geometry.location.lat;
        let longitude = data.results[0].geometry.location.lng;
        this.saveToSignUp(latitude, longitude);

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
  }
  onDogEnergyChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      dog_energy: value,
    });
  }

  onSignUp = () => {
    const url = '/sign-up';
    const data = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      address: this.state.address,
      likes: [],
      likedBy: [],
      dog_name: this.state.dog_name,
      dog_size: this.state.dog_size,
      dog_energy: this.state.dog_energy,
      bio: this.state.bio
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
        this.setState({
          redirectTo: '/browse/'
        });
        // console.log("going to", this.state.redirectTo);
      }
    );
  }


  render() {
    return (
      <div className="SignUp">
        <div className="InputFields">
          <h1 className="SignUp--title">join us to find friends for your doggos!</h1>

            <h2>your name:
              <input
                name="name"
                placeholder="enter your name"
                value={this.state.username}
                onChange={this.onNameChange}
              />
            </h2>
            <h2>your email:
              <input
                name="email"
                placeholder="enter your email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </h2>
            <h2>password:
              <input
                type="password"
                name="password"
                placeholder="create a password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </h2>
            <h2>your address:
              <input
                name="address"
                placeholder="create a password"
                value={this.state.address}
                onChange={this.onAddressChange}
              />
            </h2>
            <h3>(only you can see this)</h3>
            <h2>picture of you and your doggo:
              <input
                type="file"
                placeholder="dog-pic"
                value={this.state.picture}
                onChange={this.onPictureChange}
              />
            </h2>
            <h2>tell us about your dog:
              <textarea
                name="bio"
                placeholder="likes, dislikes, etc."
                value={this.state.bio}
                onChange={this.onBioChange}
              />
            </h2>
            <h2>dog name:
              <input
                name="dog_name"
                placeholder="dog name"
                value={this.state.dog_name}
                onChange={this.onDogNameChange}
              />
            </h2>
            <h2>dog size:
              <input
                name="dog_size"
                placeholder="small, medium, or large"
                value={this.state.dog_size}
                onChange={this.onDogSizeChange}
              />
            </h2>
            <h2>dog energy level:
              <input
                name="dog_energy"
                placeholder="calm, bursts, or overactive?"
                value={this.state.dog_energy}
                onChange={this.onDogEnergyChange}
              />
            </h2>
            <Button onClick={this.onSignUp}>sign up</Button>
        </div>
      </div>
    );
  }
}

export default SignUp;
