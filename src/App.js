import React, { Component } from 'react';
import './metroidbosses.json';
import SearchBar from './search.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      </div>
    );
  }
}

export default App;
