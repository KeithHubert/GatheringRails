import React from 'react';
import { Link } from 'react-router';

const CommentTile = (props) => {
  // username = this
  return(
    <div>
      <strong> {props.user.first_name} {props.user.last_name}</strong>
      <strong>: </strong>{props.comment}
    </div>
  )
}

export default CommentTile;
