import React, { Component } from 'react';

import { Header, SearchForm, SubHeader, RangeSlider } from './Components';
import FlightDetailsContainer from './Container/FlightDetailsContainer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOneWay: true,
      originCity: '',
      destinationCity: '',
      departDateObj: '',
      returnDateObj: '',
      sliderValue: null
    };
  }

  onClickOnSearch = data => {
    this.setState({
      ...data,
      sliderValue: null
    });
  };

  onChangeComplete = sliderValue => {
    this.setState({ sliderValue });
  };

  render() {
    const {
      originCity,
      destinationCity,
      departDateObj,
      returnDateObj,
      sliderValue,
      isOneWay
    } = this.state;

    return (
      <div>
        <Header />

        <div className="middle-container">
          <div className="search-form-slider-container">
            <SearchForm onClickOnSearch={this.onClickOnSearch} />
            <RangeSlider onChangeComplete={this.onChangeComplete} />
          </div>

          <div className="okok">
            <SubHeader
              originCity={originCity}
              destinationCity={destinationCity}
              departDateObj={departDateObj}
              returnDateObj={returnDateObj}
              isOneWay={isOneWay}
            />
            <div className="flight-details-array">
              <FlightDetailsContainer
                originCity={originCity}
                destinationCity={destinationCity}
                departDateObj={departDateObj}
                returnDateObj={returnDateObj}
                isOneWay={isOneWay}
                sliderValue={sliderValue}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
