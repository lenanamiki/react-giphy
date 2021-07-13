import React, { Component } from 'react';
import SearchBar from "./searchBar";
import Gif from "./gif";
import GifList from "./gifList";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const selectedId = "gG6OcTSRWaSis";
    const ids = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} />
        </div>
      </div>
    );
  }
}

export default App;
