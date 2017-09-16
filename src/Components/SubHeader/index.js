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

  /**
   * format moment date object to '20/09/2017'
   * @param {object} dateObj
   */
  const formatDate = dateObj => {
    return dateObj.format('Do MMM YYYY');
  };

  const renderDepartDate = () => {
    if (departDateObj) {
      return <p>Depart: {formatDate(departDateObj)}</p>;
    }
    return null;
  };

  const renderReturnDate = () => {
    if (!isOneWay) {
      return <p>Return: {formatDate(returnDateObj)}</p>;
    }
    return null;
  };

  return (
    <div className="sub-header-container">
      <p className="sub-header-title">{renderTitle()}</p>
      <div className="sub-header-date">
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
