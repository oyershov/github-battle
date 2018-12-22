import React, { Component } from 'react';

export default class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label htmlFor="username">{this.props.label}</label>
        <input
          type="text"
          id='username'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}
          placeholder='GitHub Username' />
        <button className='button' disabled={!this.state.username} type='submit'>Submit</button>
      </form>
    )
  }
}