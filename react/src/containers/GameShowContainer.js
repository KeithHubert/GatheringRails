import React, { Component } from 'react'
import GameShow from '../components/GameShow'

class GameShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: []
    }
  }

    loadGamesFromServer() {
      fetch('/api/v1/games')
      .then(response => response.json())
      .then(body => {
        let thisGameId = this.props.routeParams.id;
        let thisGame = null;

        body.forEach( function(gameInBody) {
          if (gameInBody.id == thisGameId) {
            thisGame = gameInBody;
          }
        });
        this.setState({ game: thisGame });
    })
  }

  componentDidMount() {
    this.loadGamesFromServer();
    // setInterval(this.loadGamesFromServer.bind(this), this.props.pollInterval);
  }

  render() {
      return (
        <div className="row align-justify">
          <div className="column small-4 top-five">
            <h3> Game Info </h3>
            <hr />
            <GameShow
              key={this.state.game.id}
              id={this.state.game.id}
              title={this.state.game.title}
              gametype = {this.state.game.gametype}
              time = {this.state.game.time}
              date = {this.state.game.date}
              address = {this.state.game.address}
              city = {this.state.game.city}
              zip = {this.state.game.zip}
              number_of_players = {this.state.game.number_of_players}
            />
          </div>
        </div>
      )
    }
  }

export default GameShowContainer;
