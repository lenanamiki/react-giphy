import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  render() {
    return (
      <input type="text" className="form-control form-search" placeholder="Search a GIF" />
    );
  }
}

export default SearchBar;
