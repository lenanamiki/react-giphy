import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={url} alt="GIF" className="gif" />
    );
  }
}

export default Gif;
