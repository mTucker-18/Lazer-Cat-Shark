import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Button from '../Button/button.js';
import Card from '../Card/Card.js';

import './Browse.css';

const haversine = require('haversine');

class Browse extends Component {
  state = {
    modalIsOpen: false,
    next_index: 0,
    match_name: null,
    match_latitude: null,
    match_longitude: null,
    bio: null,
    dog_name: null,
    dog_size: null,
    dog_energy: null,
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  distanceCalc = () => {

    console.log('haversine starting');
    const start = {latitude: 37.8241591, longitude: -122.2799876};
    console.log(start);
    const end = {latitude: 37.8476842, longitude: -122.2811626};
    console.log(end);
    let distanceAway = haversine(start, end, {unit:'mile'});
    console.log('distance away in miles: ', distanceAway);
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
      console.log(response[0])
      console.log(this.state.next_index)

      this.setState({
        match_name: response[this.state.next_index].name,
        latitude: response[this.state.next_index].latitude,
        longitude: response[this.state.next_index].longitude,
        bio: response[this.state.next_index].bio,
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
        <div className="Modal">
          <button onClick={this.openModal}>Open Modal</button>
          <Modal className="Modal"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
          >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <div className="Modal">I am a modal</div>
            <button className="Modal" onClick={
                this.closeModal}>close</button>
          </Modal>
        </div>

        <Button
          // onClick={this.distanceCalc}>
          onClick={this.newCard}>
          New Match
        </Button>
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
