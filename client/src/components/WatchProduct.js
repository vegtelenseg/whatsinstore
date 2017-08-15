import React, { Component } from 'react';

class WatchProduct extends Component {
  watchProduct = (e) => {
    e.preventDefault();
    alert("Watching");
  }
  render() {
    return (
      <button onClick={this.watchProduct.bind(this)}>Watch this</button>
    );
  }
}

export default WatchProduct;
