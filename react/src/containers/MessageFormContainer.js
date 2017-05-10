import React, { Component } from 'react';
import MessageTile from './MessageTile';


class MessageFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }

    this.messageTextHandle=this.messageTextHandle.bind(this);
    this.handleClearForm=this.handleClearForm.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }

  messageTextHandle(event) {
  event.preventDefault();
  this.setState({ ratingSelected: event.target.value })
}

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      message: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let protoPayload = {
      message: this.state.message,

    };
    let formPayload = JSON.stringify(protoPayload);
    this.props.addNewMessage(formPayload);
    this.handleClearForm(event);
  }

  render() {

    return(
      <form className="new-message-form callout" onSubmit={this.handleFormSubmit}>
        <MessageTile
          content={this.state.message}
          label="Review Title"
          name="review-title"
          changeHandle={this.messageTextHandle}
        />


        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
          <button className="button" onClick={this.handleClearForm}>Clear</button>
        </div>
      </form>
    )
  }
}

export default ReviewFormContainer;
