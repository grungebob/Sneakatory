import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import Shelf from './components/Shelf.js';
import data from './dummy_data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      view: 'Shelf 1'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  handleClick(e) {
    console.log('Click Registered', e);
    console.log('this \n', this);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Welcome to Sneakatory</h1>
        </header>
        <p className="App-intro">
          Hover over the shelf slot to view data. <br/> Click on the slot to update.
        </p>
        <p className="App-intro"> 
          {this.state.view}
        </p>
        <Shelf shelf1={this.state.data.shelf1} handleClick={this.handleClick}/>
      </div>
    );
  };
}

export default App;
