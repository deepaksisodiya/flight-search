import React, { Component, PropTypes } from 'react';
import './SubHeader.css';

export default class SubHeader extends Component {

  getTitle = () => {
    const { originCity, destinationCity, returnDate } = this.props;
    if (returnDate) {
      return `${originCity} > ${destinationCity} > ${originCity}`;
    } else {
      return `${originCity} > ${destinationCity}`;
    }
  };

  render() {
    return (
      <div className="subHeader-container">
        <h1>{this.getTitle()}</h1>
      </div>
    );
  }
}

SubHeader.PropTypes = {
  originCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired,
  departDate: PropTypes.string.isRequired,
  returnDate: PropTypes.string,
};

SubHeader.defaultProps = {
  returnDate: '',
};