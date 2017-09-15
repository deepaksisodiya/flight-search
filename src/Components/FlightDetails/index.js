import React, { Component, PropTypes } from 'react';
import './FlightDetails.css';

import FlightSubInfo from './../FlightSubInfo';

export default class FlightDetails extends Component {

  render() {
    const { price, originCityCode, destinationCityCode, gDepartTime, gArriveTime, gFlightNumber } = this.props;

    return (
      <div className="flight-details-container">
        <div className="flight-details-subContainer">
          <p className="flight-details-price">Rs. {price}</p>
          <div className="flight-details-info">
            <FlightSubInfo
              flightNumber={gFlightNumber}
              originCityCode={originCityCode}
              destinationCityCode={destinationCityCode}
              departTime={gDepartTime}
              arriveTime={gArriveTime}
            />
          </div>
        </div>
        <div className="book-flight-container">
          <div className="rectangle"></div>
          <div className="btn-container">
            <button className="btn">Book this flight</button>
          </div>
        </div>

      </div>
    )
  }

}

FlightDetails.PropTypes = {
  price: PropTypes.string.isRequired,
  isOneWay: PropTypes.string.isRequired,
  originCityCode: PropTypes.string.isRequired,
  destinationCityCode: PropTypes.string.isRequired,
  gDepartTime: PropTypes.string.isRequired,
  gArriveTime: PropTypes.string.isRequired,
  gFlightNumber: PropTypes.string.isRequired,
};
