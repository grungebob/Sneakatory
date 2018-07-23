import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sneakatory</h1>
        </header>
        <p className="App-intro">
          To view a slot's data, hover over the shelf slot. <br/> To update the data, click on the slot.
        </p>
      </div>
    );
  }
}

export default App;
