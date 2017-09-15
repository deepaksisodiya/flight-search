import React, { Component } from 'react';
import moment from 'moment';

import { FlightDetails } from './../../Components';

import { oneWayJson, twoWayJson } from './../../json';

export default class AvailableFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightDetailsArr: []
    };
  }

  componentWillReceiveProps(newProps) {
    this.getAvailableFlights(newProps);
  }

  getAvailableFlights = newProps => {
    console.log('newProps ', newProps);

    const departDate = moment(newProps.departDateObj).format('DD/MM/YYYY');
    const returnDate = moment(newProps.returnDateObj).format('DD/MM/YYYY');
    let flightDetailsArr;

    if (newProps.isOneWay) {
      if (newProps.sliderValue) {
        flightDetailsArr = oneWayJson.filter(obj => {
          return (
            obj.originCity === newProps.originCity &&
            obj.departDate === departDate &&
            obj.destinationCity === newProps.destinationCity &&
            obj.price < newProps.sliderValue
          );
        });
      } else {
        flightDetailsArr = oneWayJson.filter(obj => {
          return (
            obj.originCity === newProps.originCity &&
            obj.departDate === departDate &&
            obj.destinationCity === newProps.destinationCity
          );
        });
      }
    } else {
      if (newProps.sliderValue) {
        flightDetailsArr = twoWayJson.filter(obj => {
          return (
            obj.originCity === newProps.originCity &&
            obj.destinationCity === newProps.destinationCity &&
            obj.departDate === departDate &&
            obj.returnDate === returnDate &&
            obj.price < newProps.sliderValue
          );
        });
      } else {
        flightDetailsArr = twoWayJson.filter(obj => {
          return (
            obj.originCity === newProps.originCity &&
            obj.destinationCity === newProps.destinationCity &&
            obj.departDate === departDate &&
            obj.returnDate === returnDate
          );
        });
      }
    }

    this.setState({
      flightDetailsArr
    });
  };

  renderFlightDetails = () => {
    const { flightDetailsArr } = this.state;
    let arr;

    if (this.props.isOneWay) {
      arr = flightDetailsArr.map((obj, index) => {
        return (
          <FlightDetails
            key={index}
            price={obj.price}
            isOneWay={this.props.isOneWay}
            gFlightNumber={obj.flightNumber}
            originCityCode={obj.originCityCode}
            destinationCityCode={obj.destinationCityCode}
            gDepartTime={obj.detaprtTime}
            gArriveTime={obj.arriveTime}
          />
        );
      });
    } else {
      arr = flightDetailsArr.map((obj, index) => {
        return (
          <FlightDetails
            key={index}
            price={obj.price}
            isOneWay={this.props.isOneWay}
            gFlightNumber={obj.gFlightNumber}
            rFlightNumber={obj.rFlightNumber}
            originCityCode={obj.originCityCode}
            destinationCityCode={obj.destinationCityCode}
            gDepartTime={obj.gDetaprtTime}
            gArriveTime={obj.gArriveTime}
            rDetaprtTime={obj.rDetaprtTime}
            rArriveTime={obj.rArriveTime}
          />
        );
      });
    }

    return arr;
  };

  render() {
    return <div>{this.renderFlightDetails()}</div>;
  }
}
