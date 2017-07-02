import React, { Component } from 'react';
import NearMeGameTile from '../components/NearMeGameTile'

class NearMeGameIndexContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nearMeGames: []
    }
  }

  componentDidMount () {
    fetch(`/api/v1/nearmegames`, {credentials: 'same-origin'})
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    }).then(response => response.json()
  ).then(nearMeGameData => {
      this.setState({
        nearMeGames: nearMeGameData
      })
    }).catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render () {
    let nearMeGames = this.state.nearMeGames.map (games => {
      return (
        <NearMeGameTile
          key = {game.id}
          id = {game.id}
          game = {game.title}
        />
      )
    })

    return(
      <div>
      <br/>
        <div className='row align-middle'>
          <div className='small-10 medium-5 small-centered columns'>
            <h1>Games Available Near You</h1>
          </div>
          <div className='small-10 medium-4 small-centered columns'>
            <a href={this.props.params.user_id}>
            </a>
          </div>
        </div>
        { nearMeGames }
      </div>
    )
  }
}

export default NearMeGameIndexContainer;
