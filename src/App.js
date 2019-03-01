import React from "react";
import bosses from './metroidbosses';
import SearchBar from "./search";
import SingleBoss from "./singleboss";



class App extends React.Component {
  constructor() {
    super()
    //this iterates through all items in the bosses array
    this.bosses = bosses.map((boss, index) => (
    <li key={boss.id}>{boss.name}</li> ))
  }
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <h1>Super Metroid Bosses</h1>
        <SearchBar />
      </div>
      <div>
        <ul>
          <li>{this.bosses}</li>
        </ul>
      </div>
      <SingleBoss />
      </React.Fragment>
    );
  }
}

export default App;
