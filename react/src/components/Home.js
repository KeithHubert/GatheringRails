import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return(
    <div>
      <div className="wrapper">
        <h5 className='tagline'>The World Is Your Playground</h5>
        <div className="center">
          {props.current_user === '' &&
          <a href="/users/sign_up" className='signup-button'>
            Sign Up
          </a>
          }
        </div>
      </div>

      <div className="summary">
        <p>Gathering is the first of it’s kind pairer for
        Magic the Gathering players. Simply log in and find players near you.
        </p>
      </div>
    </div>
  )
}

export default Home;
