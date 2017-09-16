import React from 'react';
import PropTypes from 'prop-types';

import FlightSubDetails from '../FlightSubDetails';

import './FlightDetails.css';

const FlightDetails = props => {
  const {
    price,
    originCityCode,
    destinationCityCode,
    gDepartTime,
    gArriveTime,
    gFlightNumber,
    rFlightNumber,
    rDepartTime,
    rArriveTime,
    isOneWay
  } = props;

  return (
    <div className="flight-details-container">
      <div className="flight-sub-details-price-container">
        <p className="flight-details-price">Rs. {price}</p>
        <div className="flight-sub-details">
          <FlightSubDetails
            flightNumber={gFlightNumber}
            originCityCode={originCityCode}
            destinationCityCode={destinationCityCode}
            departTime={gDepartTime}
            arriveTime={gArriveTime}
          />
          {!isOneWay && (
            <FlightSubDetails
              flightNumber={rFlightNumber}
              originCityCode={destinationCityCode}
              destinationCityCode={originCityCode}
              departTime={rDepartTime}
              arriveTime={rArriveTime}
            />
          )}
        </div>
      </div>
      <div className="book-flight-container">
        <div className="rectangle" />
        <div className="btn-container">
          <button className="btn">Book this flight</button>
        </div>
      </div>
    </div>
  );
};

FlightDetails.propTypes = {
  price: PropTypes.number.isRequired,
  isOneWay: PropTypes.bool.isRequired,
  originCityCode: PropTypes.string.isRequired,
  destinationCityCode: PropTypes.string.isRequired,
  gDepartTime: PropTypes.string.isRequired,
  gArriveTime: PropTypes.string.isRequired,
  gFlightNumber: PropTypes.string.isRequired,
  rFlightNumber: PropTypes.string,
  rArriveTime: PropTypes.string,
  rDepartTime: PropTypes.string
};

FlightSubDetails.defaultProps = {
  rDepartTime: '',
  rArriveTime: '',
  rFlightNumber: ''
};

export default FlightDetails;
