import axios from 'axios';

const id = 'YOUR_CLIENT_ID',
      sec = 'YOUR_SECRET_ID',
      params = '?client_id=' + id + '?client_secret=' + sec;

function getProfile(username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then(user => user.data)
}

function getRepos() {
  
}

function handleError(error) {
  console.error(error);
}

export const fetchPopularRepos = language => {
  const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
  return axios.get(encodeURI)
    .then(response => response.data.items)
    .catch(error => console.error(error))
};