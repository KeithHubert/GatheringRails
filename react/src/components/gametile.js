import React from 'react';
import { Link } from 'react-router';

const GameTile = (props) => {
  return(
    <div className="game-tile">
      <h4>{props.title}</h4>
      <p>- Info for {props.gametype} - </p>
        <div className="button"><a href={`/games/${props.game_id}`}>See more here!</a></div>
      <hr/>
    </div>
  )
}

export default GameTile;
