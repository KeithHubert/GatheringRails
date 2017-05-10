import React from 'react';
import { Link } from 'react-router';
import CommentContainer from '../containers/CommentContainer'

const GameShow = (props) => {
  return(
      <div className="game-show">
      <h6> Title </h6>
      <ul>{props.title}</ul>
      <h6> Format </h6>
      <ul>{props.gametype}</ul>
      <h6> Time </h6>
      <ul>{props.time}</ul>
      <h6> Date </h6>
      <ul>{props.date}</ul>
      <h6> Address </h6>
      <ul>{props.address}</ul>
      <h6> City </h6>
      <ul>{props.city}</ul>
      <h6> Zip </h6>
      <ul>{props.zip}</ul>
      <h6> Players </h6>
      <ul>{props.number_of_players}</ul>
      <CommentContainer />
    </div>
  )
}

export default GameShow;
