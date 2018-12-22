import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import { battle } from "../utils/api";
import { Link } from 'react-router-dom';
import Loading from './Loading';
import {Player} from "./Player";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      loading: true,
      error: null
    }
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);
    battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(players => {
      if(players === null) {
        this.setState({ error: 'Looks like these was an error; Check both users exist!', loading: false })
      }
      this.setState({ winner: players[0], loser: players[1], loading: false })
    })
  }

  render() {
    const { winner, loser, loading, error } = this.state;
    if(loading) {
      return <Loading />;
    }
    if(error) {
      return (
        <Fragment>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </Fragment>
      )
    }
    return (
      <div className="row">
        <Player label='Winner' score={winner.score} profile={winner.profile} />
        <Player label='Loser' score={loser.score} profile={loser.profile} />
      </div>
    )
  }
}