import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.js';
import Card from '../Card/Card.js';
import './Browse.css';

class Browse extends Component {
  state = {
    next_index: 0,
    match_name: null,
    location: null,
    bio: null,
    dog_name: null,
    dog_size: null,
    dog_energy: null,
  }


  yesButton = () => {
    console.log("people who like jill: ", this.state.list_of_users[0].user1.isLikedBy);
    let old_likedBy = this.state.list_of_users[0].user1.isLikedBy;
    let user_displayed = this.state.human.name;
    let new_likedBy = old_likedBy.push(user_displayed);

    this.setState({
      list_of_users: [
        {
          user1: {
            isLikedBy: new_likedBy,
          }
        }
      ]
    });
    console.log("people who like jill now: ", this.state.list_of_users[0].user1.isLikedBy);

    this.newCard();
  }

  noButton = () => {
    console.log("no button works")
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
      // for each item in the response array
      // take response at index number and increment
      console.log('get was successful', response)
      console.log('get was successful', response[this.state.next_index])
      console.log('human name', response[this.state.next_index].human_name)
      this.setState({
        match_name: response[this.state.next_index].human_name,
        location: null,
        bio: response[this.state.next_index].human_bio,
        dog_name: response[this.state.next_index].dog_name,
        dog_size: response[this.state.next_index].dog_size,
        dog_energy: response[this.state.next_index].dog_energy,
        next_index: new_index,
      })
      console.log("state", this.state)
    }
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
          onClick={this.newCard}>
          New Match
        </Button>

        <div className="CardDisplay">
          <Card
            newMatchName={this.state.match_name}
            newMatchLocation={this.state.location}
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
