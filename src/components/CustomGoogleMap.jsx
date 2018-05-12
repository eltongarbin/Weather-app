import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const CustomGoogleMap = ({ lat, lon, isMarkerShown }) => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat, lng: lon }}>
    {isMarkerShown && <Marker position={{ lat, lng: lon }} />}
  </GoogleMap>
);

CustomGoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  isMarkerShown: PropTypes.bool
};

export default withScriptjs(withGoogleMap(CustomGoogleMap));
