import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/button.js';
import Card from '../Card/Card.js';
import './Browse.css';

class Browse extends Component {
  state = {
      human: {
        name: "steve",
        likes: ["jill"],
        isLikedBy: ["jill", "bob"],
      },
      user1: {
        name: "jill",
        likes: ["steve", "bob"],
        isLikedBy: ["bob"],
      },
      user2: {
        name: "bob",
        likes: ["steve", "jill"],
        isLikedBy: ["jill"],
      },
      user3: {
        name: "sam",
        likes: [],
        isLikedBy: [],
      },
  }

  yesButton = () => {
    console.log("yes button works")
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
            newMatch={this.state.user1.name}
            yesClick={this.yesButton}
            noClick={this.noButton}
          />
        </div>


      </div>
    );
  }
}

export default Browse;
