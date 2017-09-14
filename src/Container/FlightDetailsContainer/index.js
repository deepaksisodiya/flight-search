import React, { Component } from 'react';

import { FlightDetails } from './../../Components';

import moment from 'moment';

import { oneWayJson } from './../../json';

export default class FlightDetailsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flightDetailsArr: [],
    };
  }

  componentWillReceiveProps(newProps) {
    this.getAvailableFlights(newProps);
  }

  getAvailableFlights = (newProps) => {
    const flightDetailsArr = oneWayJson.filter((obj) => {
      console.log(obj.departDate);
      console.log(moment(newProps.departDate).format('DD/MM/YYYY'));
      console.log(obj.departDate === moment(newProps.departDate).format('DD/MM/YYYY'));
      return (obj.originCity === newProps.originCity &&
        obj.departDate === moment(newProps.departDate).format('DD/MM/YYYY') &&
        obj.destinationCity === newProps.destinationCity
      )
    });
    this.setState({
      flightDetailsArr,
    });
  };

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
