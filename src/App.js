import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import Shelf from './components/Shelf.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      shelf1:
        [
          { 
            row: 2,
            shoes: [
              {
                brand: 'Nike',
                style: "AJ1",
                size: 12,
                UPC: 18373,
              },
              { 
                brand: 'Adidas',
                style: "Yeezy VO2",
                size: 12,
                UPC: 36837,
              },
              {
                brand: 'Nike',
                style: "AJ1",
                size: 11,
                UPC: 18373,
              },
              {
                brand: 'Nike',
                style: "RF Greedy",
                size: 11,
                UPC: 382737,
                
              },
              {
                brand: 'Nike',
                style: "LBJ South Beach",
                size: 11.5,
                UPC: 373826,
              },
            ],
          },
          {
            row: 1,
            shoes: [
              {
                brand: 'Vans',
                style: "ATCQ",
                size: 12,
                UPC: 38367,
              },
              { 
                brand: 'Converse',
                style: 'Chucks Off-White',
                size: 11,
                UPC: 372345,
              },
              {
                brand: 'Diadora',
                style: "Gugas",
                size: 12,
                UPC: 332243,
              },
              {
                brand: 'Nike',
                style: "Vapor AJ3",
                size: 11,
                UPC: 382737,
                
              },
              {
                brand: 'Adidas',
                style: "Yeezy Boost 750",
                size: 11.5,
                UPC: 453678,
              },
            ],
          }
        ],
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
        <Shelf shelf1={this.state.shelf1}/>
      </div>
    );
  };
}

export default App;
