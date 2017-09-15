import React, { Component, PropTypes } from 'react';
import './SubHeader.css';

export default class SubHeader extends Component {
  renderTitle = () => {
    const { originCity, destinationCity, departDateObj, isOneWay } = this.props;
    if (departDateObj) {
      if (!isOneWay) {
        return `${originCity} > ${destinationCity} > ${originCity}`;
      } else {
        return `${originCity} > ${destinationCity}`;
      }
    }
    return null;
  };

  renderDepartDate = () => {
    const { departDateObj } = this.props;
    if (departDateObj) {
      return <p>Depart: {departDateObj.format('Do MMM YYYY')}</p>;
    }
    return null;
  };

  renderReturnDate = () => {
    const { returnDateObj } = this.props;
    if (returnDateObj) {
      return <p>Return: {returnDateObj.format('Do MMM YYYY')}</p>;
    }
    return null;
  };

  render() {
    return (
      <div className="subHeader-container">
        <p className="title">{this.renderTitle()}</p>
        <div className="date">
          {this.renderDepartDate()}
          {this.renderReturnDate()}
        </div>
      </div>
    );
  }
}

SubHeader.PropTypes = {
  originCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired,
  departDateObj: PropTypes.object.isRequired,
  isOneWay: PropTypes.bool.isRequired,
  returnDateObj: PropTypes.string
};

SubHeader.defaultProps = {
  returnDateObj: ''
};
