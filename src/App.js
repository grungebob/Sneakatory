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
      view: 'shelf1'
    }
  }

  changeView(option) {
    this.setState({
      view: option
    });
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
        <ul>
          <li className={this.state.view === 'shelf1' ? 'active' : 'inactive'} onClick={() => this.changeView('shelf1')}> Shelf 1 </li> 
          <li className={this.state.view === 'shelf2' ? 'active' : 'inactive'} onClick={() => this.changeView('shelf2')}> Shelf 2 </li> 
        </ul>
        <Shelf shelf={this.state.data[this.state.view]} handleClick={this.handleClick}/>
      </div>
    );
  };
}

export default App;
