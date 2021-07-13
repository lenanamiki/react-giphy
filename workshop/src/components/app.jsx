import React, { Component } from 'react';
import SearchBar from "./searchBar";
import Gif from "./gif";
import GifList from "./gifList";

// import giphy api
const giphy = require('giphy-api')({
  apiKey: 'oKO7iwHJnUUGq6Pd8twj48IDeqIf23cN',
  https: true
});

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedId: "icUEIrjnUuFCWDxFpU",
      ids: ["icUEIrjnUuFCWDxFpU", "Y4pAQv58ETJgRwoLxj", "XHpT1lgVR86CVzsxww", "jPBlSAfeQts9goDVC4", "Xw6yFn7frR3Y4"]
    };
  }

  changeSelectedGif = (newId) => {
    this.setState({
      selectedId: newId
    });
  };

  changeGifIds = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        ids: res.data.map(gif => gif.id)
      });
    });
  };

  render() {
    const { selectedId, ids } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifIds={this.changeGifIds}/>
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
