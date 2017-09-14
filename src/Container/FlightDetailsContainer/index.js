import React, { Component } from 'react';

import { FlightDetails } from './../../Components';

import moment from 'moment';

export default class FlightDetailsContainer extends Component {

  componentWillReceiveProps(newProps) {
    console.log('newProps ', moment(newProps.departDate).format('DD/MM/YYYY'));
  }

  render() {
    return (
      <div>
        <FlightDetails
          price="9000"
          isOneWay={true}
          flightNumber="AI-202"
          originCity="PNQ"
          destinationCity="DEL"
          departTime="10 AM"
          arriveTime="2 PM"
        />
        <FlightDetails
          price="9000"
          isOneWay={true}
          flightNumber="AI-202"
          originCity="PNQ"
          destinationCity="DEL"
          departTime="10 AM"
          arriveTime="2 PM"
        />
        <FlightDetails
          price="9000"
          isOneWay={true}
          flightNumber="AI-202"
          originCity="PNQ"
          destinationCity="DEL"
          departTime="10 AM"
          arriveTime="2 PM"
        />
        <FlightDetails
          price="9000"
          isOneWay={true}
          flightNumber="AI-202"
          originCity="PNQ"
          destinationCity="DEL"
          departTime="10 AM"
          arriveTime="2 PM"
        />
      </div>
    )
  }

}
