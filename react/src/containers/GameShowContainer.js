import React, { Component } from 'react'
import GameShow from '../components/GameShow'
import CommentTile from '../components/CommentTile'

class GameShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: {},
      currentUser: '',
      comments: [],
      comment: ''
    };

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.addNewComment = this.addNewComment.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }


  // write a onsubmit function that concatenates the new comment to state and posts it to the databse
  // bind that function to this component's constructor
  // pass down this.state.allGames as props to a new CommentsIndex component
  // Have CommentsIndex component render CommentTile components that come from props

  handleCommentChange(event){
    this.setState({comment: event.target.value})

  }

  handleCommentSubmit(){
    event.preventDefault();

    let formPayLoad = {
      comment: this.state.comment,
      user_id: this.state.currentUser.id,
      game_id: this.state.game.id
    };
    this.addNewComment(formPayLoad);
    this.handleFormClear(event);
    // post this comment to my database!
    // add it to the end of the comments array in state
  }

  addNewComment(formPayload) {
    fetch('/api/v1/comments', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ comments: [...this.state.comments, responseData] });
    });
  }

  handleFormClear(event) {
    event.preventDefault();
    this.setState({
      comment: '',
    });
  }

  loadGamesFromServer(id) {
    fetch(`/api/v1/games/${id}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ game: body, currentUser: body.user_viewing_page, comments: body.comments });
    })
  }

  componentDidMount() {
    this.loadGamesFromServer(this.props.params.id);

    // setInterval(this.loadGamesFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    let all_comments = this.state.comments.map((comment) => {
      return(
        <CommentTile
          key={comment.id}
          id={comment.id}
          user={comment.user}
          comment={comment.comment}
        />
      )
    })

      return (
        <div className="row align-justify">
          <div className="column small-4 top-five">
            <h3> Game Info </h3>
            <hr />
            <GameShow
              current_user={this.state.currentUser}
              key = {this.state.game.id}
              id=  {this.state.game.id}
              title = {this.state.game.title}
              gametype = {this.state.game.gametype}
              time = {this.state.game.time}
              date = {this.state.game.date}
              address = {this.state.game.address}
              city = {this.state.game.city}
              zip = {this.state.game.zip}
              number_of_players = {this.state.game.number_of_players}
              handleSubmit = {this.handleCommentSubmit}
              handlerFunction = {this.handleCommentChange}
              handleFormClear = {this.handleFormClear}
              comment_content = {this.state.comment}
            />
            <div className="button-group">
              <input className="button" type="submit" value="Clear" onClick={this.handleFormClear}/>
              <input className="button" type="submit" value="Submit" onClick={this.handleCommentSubmit}/>
            </div>
          </div>

          <div className='LOOKHERE'>
            {all_comments}
          </div>

        </div>
      )
    }

}

export default GameShowContainer;
