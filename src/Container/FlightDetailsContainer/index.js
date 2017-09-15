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
    const date = moment(newProps.departDateObj).format('DD/MM/YYYY');
    const flightDetailsArr = oneWayJson.filter((obj) => {
      return (obj.originCity === newProps.originCity &&
        obj.departDate ===  date &&
        obj.destinationCity === newProps.destinationCity
      );
    });

    this.setState({
      flightDetailsArr,
    });
  };

  render() {
    console.log('flightDetailsArr ', this.state.flightDetailsArr);
    const { flightDetailsArr } = this.state;
    return (
      <div>
        {flightDetailsArr.map((obj) => {

          return (
            <FlightDetails
              price={obj.price}
              isOneWay={true}
              flightNumber={obj.flightNumber}
              originCity="PNQ"
              destinationCity="DEL"
              departTime={obj.detaprtTime}
              arriveTime={obj.arriveTime}
            />
          )

        })}

      </div>
    )
  }

}
