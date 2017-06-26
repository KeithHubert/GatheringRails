import React from 'react';
import { Link } from 'react-router';

const CommentTile = (props) => {
  return(
    <div>
      <div className='row small-centered'>
        <div className='columns small-12'>
        <strong> {props.username}: </strong> {props.comment}
        </div>
      </div>
    </div>
  )
}

export default CommentTile;
