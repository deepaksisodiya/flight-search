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
    const { departDate, returnDate} = this.props;

    return (
      <div className="subHeader-container">
        <p className="title">{this.getTitle()}</p>
        <div className="date">
          <p>Depart Date: {departDate}</p>
          {returnDate && <p>Return Date: {returnDate}</p>}
        </div>
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