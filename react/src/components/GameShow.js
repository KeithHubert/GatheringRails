import React from 'react';
import { Link } from 'react-router';
import CommentField from './CommentField'

class GameShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current_user: '',
      game: {},
      gameId: '',
      game: ''
    }
  }

  componentDidMount() {
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

  handleUpdate(site) {
  let gameId = this.props.params.id;
  fetch(`/api/v1/games/${gameId}`, {
    method: "PUT",
    data: { game: game }
  })
}

handleDelete() {
  let gameId = this.props.params.id;
  fetch(`/api/v1/games/${gameId}`, {
    credentials: "same-origin",
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
}


  render() {
  return(
  <div>
    <div className="row">
  </div>

  <div>
    <form id={this.props.game_Id} onSubmit={this.props.handleSubmit}>
      <CommentField
        form = {this.props.user_id}
        user_id = {this.props.user_id}
        handlerFunction = {this.props.handlerFunction}
        handleFormClear = {this.props.handleFormClear}
        content = {this.props.comment_content}
      />
    </form>
  </div>
</div>

  )
  }
}

export default GameShow;
