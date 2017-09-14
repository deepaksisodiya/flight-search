import React, { Component, PropTypes } from 'react';
import './FlightDetails.css';

import FlightSubInfo from './../FlightSubInfo';

export default class FlightDetails extends Component {

  render() {
    const { price, originCity, destinationCity, departTime, arriveTime, flightNumber } = this.props;

    return (
      <div className="flight-details-container">
        <div className="flight-details-subContainer">
          <p className="flight-details-price">Rs. {price}</p>
          <div className="flight-details-info">
            <FlightSubInfo
              flightNumber={flightNumber}
              originCity={originCity}
              destinationCity={destinationCity}
              departTime={departTime}
              arriveTime={arriveTime}
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
  originCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired,
  departTime: PropTypes.string.isRequired,
  arriveTime: PropTypes.string.isRequired,
  flightNumber: PropTypes.string.isRequired,
};
