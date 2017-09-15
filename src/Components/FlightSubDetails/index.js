import React, { PropTypes } from 'react';

import './FlightSubDetails.css';

const FlightSubDetails = props => {
  const {
    flightNumber,
    departTime,
    arriveTime,
    originCityCode,
    destinationCityCode
  } = props;

  const getCityString = () => {
    return `${originCityCode} > ${destinationCityCode}`;
  };

  return (
    <div className="flight-sub-info-container">
      <p>{flightNumber}</p>
      <p>{getCityString()}</p>
      <p>Depart: {departTime}</p>
      <p>Arrive: {arriveTime}</p>
    </div>
  );
};

FlightSubDetails.PropTypes = {
  flightNumber: PropTypes.string.isRequired,
  originCityCode: PropTypes.string.isRequired,
  destinationCityCode: PropTypes.string.isRequired,
  departTime: PropTypes.string.isRequired,
  arriveTime: PropTypes.string.isRequired
};

export default FlightSubDetails;
