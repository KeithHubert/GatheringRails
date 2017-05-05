import React from 'react';
import { Link } from 'react-router';

const GameShow = (props) => {
  return(
      <div className="game-show">
      <ul>{props.title}</ul>
      <ul>{props.gametype}</ul>
      <ul>{props.time}</ul>
      <ul>{props.date}</ul>
      <ul>{props.address}</ul>
      <ul>{props.city}</ul>
      <ul>{props.zip}</ul>
      <ul>{props.number_of_players}</ul>
    </div>
  )
}

export default GameShow;
