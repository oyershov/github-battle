import React, { Component, Fragment } from 'react';
import PlayerInput from './PlayerInput';

export default class Battle extends Component {
  render() {
    return (
      <div className='row'>
        <PlayerInput label='Player One' />
        <PlayerInput label='Player Two' />
      </div>
    )
  }
}