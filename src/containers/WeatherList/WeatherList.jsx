import React from 'react';
import { connect } from 'react-redux';

import WeatherListItem from './WeatherListItem';

const WeatherList = ({ weathers }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>City</th>
        <th>Temperature (K)</th>
        <th>Pressure (hPa)</th>
        <th>Humidity (%)</th>
      </tr>
    </thead>
    <tbody>
      {weathers.map((weather) => (
        <WeatherListItem {...weather} key={weather.name} />
      ))}
    </tbody>
  </table>
);

export default connect((state) => ({ weathers: state.weather.list }))(
  WeatherList
);
