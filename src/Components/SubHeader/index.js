import React from 'react';
import PropTypes from 'prop-types';

import './SubHeader.css';

const SubHeader = props => {
  const {
    originCity,
    destinationCity,
    departDateObj,
    returnDateObj,
    isOneWay
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
    <div className="sub-header-container">
      <p className="title">{renderTitle()}</p>
      <div className="date">
        {renderDepartDate()}
        {renderReturnDate()}
      </div>
    </div>
  );
};

SubHeader.propTypes = {
  originCity: PropTypes.string.isRequired,
  destinationCity: PropTypes.string.isRequired,
  isOneWay: PropTypes.bool.isRequired,
  departDateObj: PropTypes.object,
  returnDateObj: PropTypes.object
};

SubHeader.defaultProps = {
  returnDateObj: null,
  departDateObj: null
};

export default SubHeader;
