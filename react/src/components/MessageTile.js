import React from 'react';
import { Link } from 'react-router';

const MessageTile = (props) => {
  return(
      <div className="message-tile">
      <p>{props.message} </p>
    </div>
  )
}

export default MessageTile;
