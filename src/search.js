import React from 'react';
import './metroidbosses.json';

class SearchBar extends React.Component {
    state = {
        searchfield: ""
    }
    render() {
        return(
            <form>
            <input type="text" name="searchfield" placeholder="Enter Search Term" value={this.state.searchfield} />
            <input type="submit" name="searchbtn" value="Search" />
            </form>
        )
    }
}
export default SearchBar;