import React, { Fragment } from 'react';

export default function PlayerPreview(props) {
  return (
    <Fragment>
      <div className="column">
        <img className='avatar' src={props.avatar} alt={'Avatar for ' + props.username} />
        <h2 className='username'>@{props.username}</h2>
        {props.children}
      </div>
    </Fragment>
  )
}