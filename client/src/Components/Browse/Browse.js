import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.js';
import Card from '../Card/Card.js';
import './Browse.css';

class Browse extends Component {
  state = {
    current_match: "jill",
    human: {
      name: "steve",
      likes: [],
      isLikedBy: ["jill", "bob"],
    },
    list_of_users: [
      {
        user1: {
          name: "jill",
          picture: "../../media/small_dog_small.png",
          likes: ["steve", "bob"],
          isLikedBy: ["bob"],
        }
      },
      {
        user2: {
          name: "bob",
          likes: ["steve", "jill"],
          isLikedBy: ["jill"],
        }
      },
      {
        user3: {
          name: "sam",
          likes: [],
          isLikedBy: [],
        }
      },
    ]
  }

  changeMatch = () => {
    let new_match = this.state.list_of_users[1].user2.name;
    this.setState({
      current_match: new_match,
    });
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

    this.changeMatch();
  }

  noButton = () => {
    console.log("no button works")
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

        <div className="CardDisplay">
          <Card
            newMatch={this.state.current_match}
            yesClick={this.yesButton}
            noClick={this.noButton}
          />
        </div>

      </div>
    );
  }
}

export default Browse;
