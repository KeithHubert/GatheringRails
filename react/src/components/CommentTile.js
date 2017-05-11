import React from 'react';
import { Link } from 'react-router';

const CommentTile = (props) => {
  // username = this
  return(
    <div>
      <strong>Username:</strong> {props.user_id}<br/>
      <strong>Comment:</strong>{props.comment}
    </div>
  )
}

export default CommentTile;
