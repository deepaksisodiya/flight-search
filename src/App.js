import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header, SearchForm } from './Components';
import SubHeader from "./Components/SubHeader/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="middle-container">
          <SearchForm />
          <SubHeader
            originCity="Pune"
            destinationCity="Delhi"
            departDate="25/12/2017"
          />
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
