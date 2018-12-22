import React from 'react';
import PlayerPreview from './PlayerPreview';

export const Profile = props => {
  const info = props.info;
  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>Company: {info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog} target='_blank' rel='noopener noreferrer'>{info.name}</a></li>}
      </ul>
    </PlayerPreview>
  )
};