import React, { Component } from 'react'
import GameTile from '../components/gameTile'


class GameShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

    loadGamesFromServer() {
      fetch('api/v1/games')
      .then(response => response.json())
      .then(body => {
      debugger;
      this.setState({ games: body })
    })
  }

  componentDidMount() {
    this.loadGamesFromServer();
    // setInterval(this.loadGamesFromServer.bind(this), this.props.pollInterval);
  }

  // componentDidMount(){
  //   fetch('/api/v1/games')
  //   .then(response => {
  //     let parsed = response.json()
  //     return parsed
  //   }).then(ids => {
  //     this.setState(ids: ids)
  //   })
  // }

  render() {
      let games = this.state.games.map (game => {
        return(
          <GameTile
            key={game.id}
            id={game.id}
            title={game.title}
            gametype = {game.venue_name}
            location = {game.location}
          />
        )
      })

      return (
        <div className="row align-justify">
          <div className="column small-4 top-five">
            <h3> Recent Games </h3>
            <hr />
            {games}
          </div>
        </div>
      )
    }
  }

export default GameShowContainer;
