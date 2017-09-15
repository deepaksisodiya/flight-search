import React, { PropTypes } from 'react';

import './SubHeader.css';

const SubHeader = props => {
  const {
    originCity,
    destinationCity,
    departDateObj,
    isOneWay,
    returnDateObj
  } = props;

  const renderTitle = () => {
    if (departDateObj) {
      if (!isOneWay) {
        return `${originCity} > ${destinationCity} > ${originCity}`;
      } else {
        return `${originCity} > ${destinationCity}`;
      }
    }
    return null;
  };

  const renderDepartDate = () => {
    if (departDateObj) {
      return <p>Depart: {departDateObj.format('Do MMM YYYY')}</p>;
    }
    return null;
  };

  const renderReturnDate = () => {
    if (returnDateObj) {
      return <p>Return: {returnDateObj.format('Do MMM YYYY')}</p>;
    }
    return null;
  };

  return (
    <div className="subHeader-container">
      <p className="title">{renderTitle()}</p>
      <div className="date">
        {renderDepartDate()}
        {renderReturnDate()}
      </div>
    </div>
  );
};

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

export default SubHeader;
