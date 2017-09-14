import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header, SearchForm, SubHeader, FlightDetails } from './Components';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originCity: 'Pune',
      destinationCity: 'Delhi',
      departDate: '25/12/2017',
    }
  }

  onClickOnSearch = (data) => {
    this.setState(data);
  };

  render() {
    const { originCity, destinationCity, departDate} = this.state;

    return (
      <div>
        <Header />

        <div className="middle-container">
          <SearchForm onClickOnSearch={this.onClickOnSearch} />
          <div className="okok">
            <SubHeader
              originCity={originCity}
              destinationCity={destinationCity}
              departDate={departDate}
            />
            <div className="flight-details-array">
              <FlightDetails
                price="9000"
                isOneWay={true}
                flightNumber="AI-202"
                originCity="PNQ"
                destinationCity="DEL"
                departTime="10 AM"
                arriveTime="2 PM"
              />
              <FlightDetails
                price="9000"
                isOneWay={true}
                flightNumber="AI-202"
                originCity="PNQ"
                destinationCity="DEL"
                departTime="10 AM"
                arriveTime="2 PM"
              />
              <FlightDetails
                price="9000"
                isOneWay={true}
                flightNumber="AI-202"
                originCity="PNQ"
                destinationCity="DEL"
                departTime="10 AM"
                arriveTime="2 PM"
              />
              <FlightDetails
                price="9000"
                isOneWay={true}
                flightNumber="AI-202"
                originCity="PNQ"
                destinationCity="DEL"
                departTime="10 AM"
                arriveTime="2 PM"
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
