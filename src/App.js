import React, { Component } from 'react';

import { Header, SubHeader } from './Components';
import { AvailableFlights, RangeSlider, SearchForm } from './Container';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOneWay: true,
      originCity: '',
      destinationCity: '',
      departDateObj: null,
      returnDateObj: null,
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
          <div className="sub-header-available-flights-container">
            <SubHeader
              originCity={originCity}
              destinationCity={destinationCity}
              departDateObj={departDateObj}
              returnDateObj={returnDateObj}
              isOneWay={isOneWay}
            />
            <div className="available-flights">
              <AvailableFlights
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
