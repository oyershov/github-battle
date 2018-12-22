import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png';
      return newState;
    })
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }

  render() {
    const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } = this.state, { match } = this.props;
    return (
      <Fragment>
        <div className='row'>
          {!playerOneName ?
            <PlayerInput
              label='Player One'
              onSubmit={this.handleSubmit}
              id='playerOne' /> :
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}>
              <button className='reset' onClick={this.handleReset.bind(this, 'playerOne')}>Reset</button>
            </PlayerPreview>
          }
          {!playerTwoName ?
            <PlayerInput
              label='Player Two'
              onSubmit={this.handleSubmit}
              id='playerTwo' /> :
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}>
              <button className='reset' onClick={this.handleReset.bind(this, 'playerTwo')}>Reset</button>
            </PlayerPreview>
          }
        </div>
        {playerOneImage && playerTwoImage &&
          <Link className='button'
                to={{ pathname: match.url + '/results',
                      search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                }}>
            Battle
          </Link>
        }
      </Fragment>
    )
  }
}