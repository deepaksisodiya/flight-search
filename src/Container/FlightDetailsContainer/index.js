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
    let flightDetailsArr;
    if (newProps.sliderValue) {
      flightDetailsArr = oneWayJson.filter((obj) => {
        return (obj.originCity === newProps.originCity &&
          obj.departDate ===  date &&
          obj.destinationCity === newProps.destinationCity &&
          obj.price < newProps.sliderValue
        );
      });
    } else {
      flightDetailsArr = oneWayJson.filter((obj) => {
        return (obj.originCity === newProps.originCity &&
          obj.departDate ===  date &&
          obj.destinationCity === newProps.destinationCity
        );
      });
    }

    this.setState({
      flightDetailsArr,
    });

  };

  render() {
    const { flightDetailsArr } = this.state;
    return (
      <div>
        {flightDetailsArr.map((obj, index) => {

          return (
            <FlightDetails
              key={index}
              price={obj.price}
              isOneWay={true}
              gFlightNumber={obj.flightNumber}
              originCityCode={obj.originCityCode}
              destinationCityCode={obj.destinationCityCode}
              gDepartTime={obj.detaprtTime}
              gArriveTime={obj.arriveTime}
            />
          )

        })}

      </div>
    )
  }

}
