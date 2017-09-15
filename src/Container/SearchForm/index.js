import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-tabs/style/react-tabs.css';
import './SearchForm.css';

export default class SearchForm extends Component {
  static propTypes = {
    onChangeComplete: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOneWay: true,
      tabIndex: 0,

      originCity: '',
      destinationCity: '',
      departDateObj: '',
      returnDateObj: ''
    };
  }

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  handleDatePicker = date => {
    this.setState({
      departDateObj: date
    });
  };

  handleDatePickerReturn = date => {
    this.setState({
      returnDateObj: date
    });
  };

  handleSubmit = event => {
    const {
      isOneWay,
      originCity,
      destinationCity,
      departDateObj,
      returnDateObj
    } = this.state;

    const { onClickOnSearch } = this.props;

    if (isOneWay) {
      if (originCity && destinationCity && departDateObj) {
        onClickOnSearch({
          originCity,
          destinationCity,
          departDateObj,
          isOneWay
        });
      }
    } else {
      if (originCity && destinationCity && departDateObj && returnDateObj) {
        onClickOnSearch({
          originCity,
          destinationCity,
          departDateObj,
          returnDateObj,
          isOneWay
        });
      }
    }

    event.preventDefault();
  };

  renderForm = isOneWay => {
    return (
      <div className="container">
        <input
          className="form-input"
          name="originCity"
          type="text"
          value={this.state.originCity}
          onChange={this.handleChange}
          placeholder="Enter Origin City"
        />
        <input
          className="form-input"
          name="destinationCity"
          type="text"
          value={this.state.destinationCity}
          onChange={this.handleChange}
          placeholder="Enter Destination City"
        />
        <div className="date-container">
          <DatePicker
            selected={this.state.departDateObj}
            onChange={this.handleDatePicker}
            placeholderText="Departure Date"
            className="date-picker"
          />
        </div>
        {isOneWay === false && (
          <div className="date-container">
            <DatePicker
              selected={this.state.returnDateObj}
              onChange={this.handleDatePickerReturn}
              placeholderText="Return Date"
              className="date-picker"
            />
          </div>
        )}
        <button onClick={this.handleSubmit} className="btn">
          Search
        </button>
      </div>
    );
  };

  onSelectTab = tabIndex => {
    this.setState(prevState => {
      return {
        tabIndex,
        isOneWay: !prevState.isOneWay
      };
    });
  };

  render() {
    const { isOneWay } = this.state;

    return (
      <Tabs selectedIndex={this.state.tabIndex} onSelect={this.onSelectTab}>
        <TabList>
          <Tab>One Way</Tab>
          <Tab>Return</Tab>
        </TabList>

        <TabPanel>{this.renderForm(isOneWay)}</TabPanel>
        <TabPanel>{this.renderForm(isOneWay)}</TabPanel>
      </Tabs>
    );
  }
}
