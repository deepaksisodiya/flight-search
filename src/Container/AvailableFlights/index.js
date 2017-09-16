import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { FlightDetails } from './../../Components';

import { oneWayJson, twoWayJson } from './../../json';

export default class AvailableFlights extends Component {
  static propTypes = {
    originCity: PropTypes.string.isRequired,
    destinationCity: PropTypes.string.isRequired,
    isOneWay: PropTypes.bool.isRequired,
    sliderValue: PropTypes.number,
    returnDateObj: PropTypes.object,
    departDateObj: PropTypes.object
  };

  static defaultProps = {
    departDateObj: null,
    returnDateObj: null,
    sliderValue: null
  };

  constructor(props) {
    super(props);
    this.state = {
      flightDetailsArr: []
    };
  }

  componentWillReceiveProps(newProps) {
    this.getAvailableFlights(newProps);
  }

  /**
   * filter the data from json bases on search
   * @param {object} newProps
   */
  getAvailableFlights = newProps => {
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
    const { isOneWay } = this.props;
    let arr;

    if (this.props.isOneWay) {
      arr = flightDetailsArr.map((obj, index) => {
        return (
          <FlightDetails
            key={index}
            price={obj.price}
            isOneWay={isOneWay}
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
            isOneWay={isOneWay}
            gFlightNumber={obj.gFlightNumber}
            rFlightNumber={obj.rFlightNumber}
            originCityCode={obj.originCityCode}
            destinationCityCode={obj.destinationCityCode}
            gDepartTime={obj.gDepartTime}
            gArriveTime={obj.gArriveTime}
            rDepartTime={obj.rDepartTime}
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
