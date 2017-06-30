import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return(
    <div>
      <div className="outerwrap">
        <div className="wrapper">
          <h5>The World Is Your Playground</h5>
          <div className="center">
            {props.current_user === '' &&
            <a href="/users/sign_up">Sign Up</a>
            }
          </div>

        </div>
        <div className="summary">
          <p>Gathering is the first of it’s kind pairer for
          Magic the Gathering players. Simply log in and find players near you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
