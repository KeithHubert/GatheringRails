import React, { Component } from 'react'
import GameShow from '../components/GameShow'

class GameShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: [],
      currentUser: null,
      comments: []
    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  }
  // write a onsubmit function that concatenates the new comment to state and posts it to the databse
  // bind that function to this component's constructor
  // pass down this.state.allGames as props to a new CommentsIndex component
  // Have CommentsIndex component render CommentTile components that come from props

  handleCommentSubmit(){
    // post this comment to my database!
    // add it to the end of the comments array in state

  }

  loadGamesFromServer(id) {
    fetch(`/api/v1/games/${id}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      debugger;
      this.setState({ game: body.game, currentUser: body.current_user, comments: body.comments });
    })

  componentDidMount() {
    this.loadGamesFromServer(this.props.params.id);

    // setInterval(this.loadGamesFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    debugger;

    let comments = this.state.comments.map(comment => {
      <CommentTile
        comment={comment}
        />
    })
      return (
        <div className="row align-justify">
          <div className="column small-4 top-five">
            <h3> Game Info </h3>
            <hr />
            <GameShow
              current_user={this.state.currentUser}
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
              handleSubmit = {this.handleCommentSubmit}

            />
          </div>
          <div>
            {comments}
          </div>
        </div>
      )
    }
  }

export default GameShowContainer;
