import React, { Component, PropTypes } from 'react';
import './RangeSlider.css';

import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.css'

export default class RangeSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 0,
    }
  }

  handleOnChange = (value) => {
    this.setState({
      sliderValue: value,
    });
  };

  render() {
    const { sliderValue } = this.state;

    return (
      <div className="slider-container">
        <Slider
          value={sliderValue}
          onChange={this.handleOnChange}
        />
      </div>
    )
  }

}