import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.js';
import Card from '../Card/Card.js';
import './Browse.css';

class Browse extends Component {
  state = {
    match_name: null,
    location: null,
    bio: null,
    dog_name: null,
    dog_size: null,
    dog_energy: null,
    // human: {
    //   name: "steve",
    //   likes: [],
    //   isLikedBy: ["jill", "bob"],
    // },
    // list_of_users: [
    //   {
    //     user1: {
    //       name: "jill",
    //       picture: "../../media/small_dog_small.png",
    //       likes: ["steve", "bob"],
    //       isLikedBy: ["bob"],
    //     }
    //   },
    //   {
    //     user2: {
    //       name: "bob",
    //       likes: ["steve", "jill"],
    //       isLikedBy: ["jill"],
    //     }
    //   },
    //   {
    //     user3: {
    //       name: "sam",
    //       likes: [],
    //       isLikedBy: [],
    //     }
    //   },
    // ]
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

    fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {
      console.log('get was successful', response)
      console.log('get was successful', response[0])
      console.log('human name', response[0].human_name)
      this.setState({
        match_name: response[0].human_name,
        location: null,
        bio: response[0].human_bio,
        dog_name: response[0].dog_name,
        dog_size: response[0].dog_size,
        dog_energy: response[0].dog_energy,
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
            newMatch={this.state.match_name}
            yesClick={this.yesButton}
            noClick={this.noButton}
          />
        </div>

      </div>
    );
  }
}

export default Browse;
