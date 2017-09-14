import React, { Component, PropTypes } from 'react';
import './FlightSubInfo.css';

export default class FlightSubInfo extends Component {

  getCityString = () => {
    const { originCity, destinationCity } = this.props;
    return `${originCity} > ${destinationCity}`;
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
    )
  }

}

FlightSubInfo.PropTypes = {
  flightNumber: PropTypes.string.isRequired,
  originCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired,
  departTime: PropTypes.string.isRequired,
  arriveTime: PropTypes.string.isRequired,
};