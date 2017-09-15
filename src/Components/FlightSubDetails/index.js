import React, { Component, PropTypes } from 'react';

import './FlightSubDetails.css';

export default class FlightSubDetails extends Component {
  getCityString = () => {
    const { originCityCode, destinationCityCode } = this.props;
    return `${originCityCode} > ${destinationCityCode}`;
  };

  render() {
    const { flightNumber, departTime, arriveTime } = this.props;

    return (
      <div className="flight-sub-info-container">
        <p>{flightNumber}</p>
        <p>{this.getCityString()}</p>
        <p>Depart: {departTime}</p>
        <p>Arrive: {arriveTime}</p>
      </div>
    );
  }
}

FlightSubDetails.PropTypes = {
  flightNumber: PropTypes.string.isRequired,
  originCityCode: PropTypes.string.isRequired,
  destinationCityCode: PropTypes.string.isRequired,
  departTime: PropTypes.string.isRequired,
  arriveTime: PropTypes.string.isRequired
};
