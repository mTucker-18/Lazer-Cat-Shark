import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Button from '../Button/button.js';
import Card from '../Card/Card.js';

import './Browse.css';

const haversine = require('haversine');
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Browse extends Component {

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

  state = {
    modalIsOpen: false,
    next_index: 0,
    match_name: null,
    latitude: null,
    longitude: null,
    distanceAway: null,
    bio: null,
    dog_name: null,
    dog_size: null,
    dog_energy: null,
  }

  componentWillMount = () => {
      Modal.setAppElement('body');
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  distanceCalc = () => {
    const lat = this.state.latitude;
    const lng = this.state.longitude;
    console.log('haversine starting');
    const start = {latitude: 37.807053, longitude: -122.269864};
    console.log(start);
    const end = {latitude: lat, longitude: lng};
    console.log('end', end);
    let distanceAway = haversine(start, end, {unit:'mile'});
    console.log('distance away in miles: ', distanceAway);
    console.log('hello', distanceAway)
    console.log("friend is ", this.state.distanceAway)
    return distanceAway
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
      console.log(response[this.state.next_index])
      console.log(this.state.next_index)
      let distance = this.distanceCalc();
      this.setState({
        match_name: response[this.state.next_index].name,
        latitude: response[this.state.next_index].latitude,
        longitude: response[this.state.next_index].longitude,
        bio: response[this.state.next_index].bio,
        dog_name: response[this.state.next_index].dog_name,
        dog_size: response[this.state.next_index].dog_size,
        dog_energy: response[this.state.next_index].dog_energy,
        next_index: new_index,
        distanceAway: this.state.distanceAway
      })
    }
  )

}

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

          <Modal className="Modal--body"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
          >

          <h3 className="Modal--title">woof! you have a match!</h3>
            <Button
              className="Modal--button"
              onClick={this.closeModal}
            >
              close
            </Button>
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
            newMatchDistance={this.state.distanceAway}
            newMatchLongitude={this.state.longitude}
            newMatchBio={this.state.bio}
            newMatchDogName={this.state.dog_name}
            newMatchDogSize={this.state.dog_size}
            newMatchDogEnergy={this.state.dog_energy}
            yesClick={this.openModal}
            noClick={this.noButton}
          />
        </div>

      </div>
    );
  }
}

export default Browse;
