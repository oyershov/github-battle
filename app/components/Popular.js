import React, { Component, Fragment } from 'react';
import SelectedLanguage from './SelectedLanguage';
import RepoGrid from './RepoGrid';
import Loading from './Loading';
import { fetchPopularRepos } from "../utils/api";

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
      isLoading: false
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage, isLoading: true });
    fetchPopularRepos(selectedLanguage).then(repos => this.setState({ repos, isLoading: false }));
  };

  render() {
    return (
      <Fragment>
        <SelectedLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {(this.state.repos && !this.state.isLoading) ? <RepoGrid repos={this.state.repos} /> : <Loading />}
      </Fragment>
    )
  }
}