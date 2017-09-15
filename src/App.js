import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header, SearchForm, SubHeader, FlightDetails, RangeSlider } from './Components';

import moment from 'moment';

import FlightDetailsContainer from './Container/FlightDetailsContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originCity: '',
      destinationCity: '',
      departDateObj: '',
      sliderValue: null,
    }
  }

  onClickOnSearch = (data) => {
    this.setState(data);
  };

  onChangeComplete = (sliderValue) => {
    console.log('on complete app ', sliderValue);
    this.setState({sliderValue});
  };

  render() {
    const { originCity, destinationCity, departDateObj, sliderValue } = this.state;

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
            />
            <div className="flight-details-array">
              <FlightDetailsContainer
                originCity={originCity}
                destinationCity={destinationCity}
                departDateObj={departDateObj}
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

/*
<div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Welcome to React</h2>
</div>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
 */
