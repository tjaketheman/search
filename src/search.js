import React from "react";
import bosses from "./metroidbosses";

class SearchBar extends React.Component {
  state = {
    searchfield: ""
  };
  onFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value.substr(0, 20)
    });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit>
          <input
            type="text"
            name="searchfield"
            placeholder="Enter Search Term"
            value={this.state.searchfield}
            onChange={this.onFieldChange}
          />
          <input type="submit" name="searchbtn" value="Search" />
        </form>
      </React.Fragment>
    );
  }
}
export default SearchBar;
