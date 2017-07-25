import React, { Component } from 'react';
import Home from '../components/Home';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: ''
    };

    this.getUserData = this.getUserData.bind(this)
    }

    componentDidMount(){
      this.getUserData()
    }

    getUserData() {
      fetch(`/api/v1/users`, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          current_user: responseData.current_user
        });
      });
    }

  render() {
      return (
        <div>
          <div className='row'>
            <div className='columns small-12'>
              <Home
                current_user={this.state.current_user}
              />
            </div>
          </div>
        </div>
      )
    }
}

export default HomeContainer;
