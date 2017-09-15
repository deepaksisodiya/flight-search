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

  onChangeComplete = () => {
    this.props.onChangeComplete(this.state.sliderValue);
  };

  render() {
    const { sliderValue } = this.state;

    return (
      <div className="slider-container">
        <p>Refine Flight Search</p>

        <div className="slider-label">
          <span>0</span>
          <span>10000</span>
        </div>

        <Slider
          value={sliderValue}
          onChange={this.handleOnChange}
          min={0}
          max={10000}
          step={100}
          onChangeComplete={this.onChangeComplete}
        />
      </div>
    )
  }

}