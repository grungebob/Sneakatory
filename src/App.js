import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import Shelf from './components/Shelf.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      shelf1: {
        row1: {
          column1: {
            title: "AJ1",
            size: 12,
            UPC: '18373'
          },
          column2: {
            title: "Yeezy VO2"
          },
          column3: {
            title: "AirMax 97/1"
          },
          column4: {
            title: "RF Greedy"
          },
          column5: {
            title: "LBJ South Beach"
          }
        },
      }
    }
  }

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
        <Shelf />
      </div>
    );
  }
}

export default App;
