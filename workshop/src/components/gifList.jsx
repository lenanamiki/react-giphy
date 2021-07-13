import React, { Component } from 'react';
import Gif from "./gif";

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        <Gif />
        <Gif />
        <Gif />
        <Gif />
      </div>
    );
  }
}

export default GifList;
