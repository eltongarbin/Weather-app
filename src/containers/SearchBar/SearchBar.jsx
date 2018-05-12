import React from 'react';
import { connect } from 'react-redux';

import SearchBarForm from './SearchBarForm';
import { fetchWeather } from './../../actions';

class SearchBar extends React.PureComponent {
  submit = (values) => {
    this.props.fetchWeather(values);
  };

  render() {
    return <SearchBarForm onSubmit={this.submit} />;
  }
}

export default connect(null, { fetchWeather })(SearchBar);
