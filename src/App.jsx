import React, { PureComponent } from 'react';

import SearchBarContainer from './containers/SearchBar';
import WeatherListContainer from './containers/WeatherList';

class App extends PureComponent {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <WeatherListContainer />
      </div>
    );
  }
}

export default App;
