import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header, SearchForm, SubHeader, FlightDetails } from './Components';

import moment from 'moment';

import FlightDetailsContainer from './Container/FlightDetailsContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originCity: 'Pune',
      destinationCity: 'Delhi',
      departDateObj: moment()
    }
  }

  onClickOnSearch = (data) => {
    this.setState(data);
  };

  render() {
    const { originCity, destinationCity, departDateObj } = this.state;

    return (
      <div>
        <Header />

        <div className="middle-container">
          <SearchForm onClickOnSearch={this.onClickOnSearch} />
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
