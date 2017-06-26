import React from 'react';
import { Link } from 'react-router';

const GameTile = (props) => {
  return(
      <div className="game-tile">
      <h6><a href={`/games/${props.id}`}>{props.title}</a></h6>
      <p>{props.gametype}</p>
    </div>
  )
}

export default GameTile;
