import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import './SearchForm.css';

export default class SearchForm extends Component {

  constructor(props) {
    super(props);
    const date = moment();
    this.state = {
      originCity: '',
      destinationCity: '',
      datePicker: '',
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  };

  handleDatePicker = (date) => {
    this.setState({
      datePicker:date,
    });
  };

  render () {
    return (
      <form className="container">
        <div className="date-container">
          <DatePicker
            selected={this.state.datePicker}
            onChange={this.handleDatePicker}
            placeholderText="Departure Date"
            className="date-picker"
          />
        </div>
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

        <p>{this.state.originCity}</p>
        <p>{this.state.destinationCity}</p>
        <p>{this.state.startDate}</p>
      </form>
    )
  }

}