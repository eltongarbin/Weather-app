import React from 'react';
import PropTypes from 'prop-types';

import Chart from './../../components/Chart';
import CustomGoogleMap from './../../components/CustomGoogleMap';

const WeatherListItem = ({ temps, pressures, humidities, lon, lat }) => (
  <tr>
    <td>
      <CustomGoogleMap
        lon={lon}
        lat={lat}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </td>
    <td>
      <Chart data={temps} color="orange" units="K" />
    </td>
    <td>
      <Chart data={pressures} color="green" units="hPa" />
    </td>
    <td>
      <Chart data={humidities} color="black" units="%" />
    </td>
  </tr>
);

WeatherListItem.propTypes = {
  temps: PropTypes.array.isRequired,
  pressures: PropTypes.array.isRequired,
  humidities: PropTypes.array.isRequired,
  lon: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired
};

export default WeatherListItem;
