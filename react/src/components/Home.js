import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return(
    <div>
      <div className="outerwrap">
        <div className="wrapper">
          <h5>The World Is Your Playground</h5>
            <div className="center">

          {props.current_user === null &&
            <a href="/users/sign_up">Sign Up</a>
          }

          </div>
            <video id="background-video" loop autoPlay>
            <source src="https://s3.us-east-2.amazonaws.com/gathererbackground/animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
      </div>


      <div className="summary">
        <p>Gathering is the first of it’s kind pairer for
          Magic the Gathering players. Simply log in and find players near you.
        </p>
      </div>

      <div className="footer">
        <p> Magic: The Gathering is a Trademark of Wizards of the Coast, Inc. /
        Hasbro, Inc. This site is unaffiliated.
        </p>
      </div>
    </div>

  )
}

export default Home;
