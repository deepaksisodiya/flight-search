import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.css';
import './RangeSlider.css';

export default class RangeSlider extends Component {
  static propTypes = {
    onChangeComplete: PropTypes.func.isRequired
  };

  state = {
    sliderValue: 0
  };

  /**
   * on change event of slider
   * @param {number} value
   */
  handleOnChange = value => {
    this.setState({
      sliderValue: value
    });
  };

  /**
   * on complete change event of slider
   */
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
    );
  }
}
