import React, { Component } from 'react';
import TextField from '../components/TextField';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.addNewComment = this.addNewComment.bind(this)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      comment: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
      let formPayload = {
        comment: this.state.comment
      };
      this.addNewComment(formPayLoad);
      this.handleFormClear(event);
    }


  handleCommentChange(event) {
    this.setState({ comment: event.target.value })
  }

  addNewComment(formPayload) {

  fetch('/api/v1/games', {
    method: 'POST',
    body: JSON.stringify(formPayload)
  })
  .then(response => response.json())
  .then(responseData => {
    this.setState({ games: [...this.state.comment, responseData] })
    // window.whatever path correct showpage
  })
  }

  render() {
    return (
      <form className="comment" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.comment}
          label='Comment'
          name='comment'
          handlerFunction={this.handleCommentChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default CommentContainer;
