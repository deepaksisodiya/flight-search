import React, { Component, PropTypes } from 'react';

import FlightSubDetails from '../FlightSubDetails';

import './FlightDetails.css';

export default class FlightDetails extends Component {
  render() {
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
    } = this.props;

    return (
      <div className="flight-details-container">
        <div className="flight-details-subContainer">
          <p className="flight-details-price">Rs. {price}</p>
          <div className="flight-details-info">
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
                originCityCode={originCityCode}
                destinationCityCode={destinationCityCode}
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
  }
}

FlightDetails.PropTypes = {
  price: PropTypes.string.isRequired,
  isOneWay: PropTypes.string.isRequired,
  originCityCode: PropTypes.string.isRequired,
  destinationCityCode: PropTypes.string.isRequired,
  gDepartTime: PropTypes.string.isRequired,
  gArriveTime: PropTypes.string.isRequired,
  rDetaprtTime: PropTypes.string.isRequired,
  rArriveTime: PropTypes.string.isRequired,
  gFlightNumber: PropTypes.string.isRequired,
  rFlightNumber: PropTypes.string.isRequired
};
