import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import './SearchForm.css';

export default class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originCity: '',
      destinationCity: '',
      departDate: '',
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
      departDate:date,
    });
  };

  handleSubmit = (event) => {
    const { originCity, destinationCity, departDate } = this.state;
    if (originCity && destinationCity && departDate) {
      this.props.onClickOnSearch(this.state);
    }
    event.preventDefault();
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <div className="date-container">
          <DatePicker
            selected={this.state.departDate}
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
        <input className="btn" type="submit" value="Search" />
      </form>
    )
  }

}