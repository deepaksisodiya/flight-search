import React, { Component, PropTypes } from 'react';
import './SubHeader.css';

export default class SubHeader extends Component {

  renderTitle = () => {
    const { originCity, destinationCity, returnDate, departDateObj } = this.props;
    if (departDateObj) {
      if (returnDate) {
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
      return <p>Depart Date: {departDateObj.format("Do MMM YYYY")}</p>
    }
    return null;
  };

  render() {
    const { departDateObj, returnDate} = this.props;

    return (
      <div className="subHeader-container">
        <p className="title">{this.renderTitle()}</p>
        <div className="date">
          {this.renderDepartDate()}
          {returnDate && <p>Return Date: {returnDate}</p>}
        </div>
      </div>
    );
  }
}

SubHeader.PropTypes = {
  originCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired,
  departDateObj: PropTypes.object.isRequired,
  returnDate: PropTypes.string,
};

SubHeader.defaultProps = {
  returnDate: '',
};