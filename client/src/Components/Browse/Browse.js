import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.js';
import Card from '../Card/Card.js';
import './Browse.css';
import Modal from '../Modal/modal.js';

const haversine = require('haversine');

class Browse extends Component {
  state = {
    next_index: 0,
    match_name: null,
    match_latitude: null,
    match_longitude: null,
    bio: null,
    dog_name: null,
    dog_size: null,
    dog_energy: null,
  }

  distanceCalc = () => {
    console.log('hello');
    let myAddress = {latitude: 37.8241591, longitude: -122.2799876};
    let theirAddress = {latitude: 37.8476842, longitude: -122.2811626};
    let distanceAway = haversine(myAddress, theirAddress);
    console.log(myAddress);
    console.log(theirAddress);
    console.log('haversine', distanceAway);
    return distanceAway;
  }

  yesButton = () => {
    const url = '/browse';

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(console.log('CAPS LOCK'));
    // this.newCard();
  }

  noButton = () => {
    this.newCard();
  }
  newCard = () => {
    const url = '/browse';
    let new_index = this.state.next_index + 1;

    fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        match_name: response[this.state.next_index].human_name,
        latitude: response[this.state.next_index].latitude,
        longitude: response[this.state.next_index].longitude,
        bio: response[this.state.next_index].human_bio,
        dog_name: response[this.state.next_index].dog_name,
        dog_size: response[this.state.next_index].dog_size,
        dog_energy: response[this.state.next_index].dog_energy,
        next_index: new_index,
      })
    }
    // distanceCalc(latitude, longitude);
  )}

  render () {
    return (
      <div className='Browse'>

        <div className='Browse--title'>
          <h1>find a doggo friend</h1>
        </div>

        <div className='Browse--nav'>
          <Link to='/user-page/'>
            <Button>user page</Button>
          </Link>

          <Link to='/'>
            <Button>log out</Button>
          </Link>
        </div>

        <Button
          onClick={this.distanceCalc}>
          New Match
        </Button>
        <Modal
          show={this.state.currentModal}>
          Congratulation, You have a match!
        </Modal>
        <div className="CardDisplay">
          <Card
            newMatchName={this.state.match_name}
            // newMatchDistance=distanceAway
            newMatchLongitude={this.state.longitude}
            newMatchBio={this.state.bio}
            newMatchDogName={this.state.dog_name}
            newMatchDogSize={this.state.dog_size}
            newMatchDogEnergy={this.state.dog_energy}
            yesClick={this.yesButton}
            noClick={this.noButton}
          />
        </div>

      </div>
    );
  }
}

export default Browse;
