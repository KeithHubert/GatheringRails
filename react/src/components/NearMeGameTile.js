import React, { Component } from 'react';

class NearMeGameTile extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='row inventory-tile-container align-center'>
          <div className="small-10 small-centered columns inventory-tile">
            <a href={"/games/" + this.props.id} className='black-text'>
              <div className='tile-text'>
                <p> { this.props.game.title} </p>
              </div>
              </a>
          </div>
      </div>
    )
  }
};

export default NearMeGameTile;
