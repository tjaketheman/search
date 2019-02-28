import React from 'react';
import SingleBoss from './singleboss';
import SearchBar from './search';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>Super Metroid Bosses</h1>
      <SearchBar />
      <SingleBoss />
      </div>
    );
  }
}

export default App;
