import React from 'react';
import PropTypes from 'prop-types';

import './FlightSubDetails.css';

const FlightSubDetails = props => {
  const {
    flightNumber,
    departTime,
    arriveTime,
    originCityCode,
    destinationCityCode
  } = props;

  const renderCity = () => {
    return `${originCityCode} > ${destinationCityCode}`;
  };

  return (
    <div className="flight-sub-details-container">
      <p>{flightNumber}</p>
      <p className="flight-sub-details-item">{renderCity()}</p>
      <p className="flight-sub-details-item">Depart: {departTime}</p>
      <p className="flight-sub-details-item time">Arrive: {arriveTime}</p>
    </div>
  );
};

FlightSubDetails.propTypes = {
  flightNumber: PropTypes.string.isRequired,
  originCityCode: PropTypes.string.isRequired,
  destinationCityCode: PropTypes.string.isRequired,
  departTime: PropTypes.string.isRequired,
  arriveTime: PropTypes.string.isRequired
};

export default FlightSubDetails;
