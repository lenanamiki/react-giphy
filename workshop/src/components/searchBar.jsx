import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleChange = (e) => {
    const { changeGifIds } = this.props;
    const keyword = e.currentTarget.value;
    changeGifIds(keyword);
  };

  render() {
    return (
      <input type="text" className="form-control form-search" placeholder="Search a GIF" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
