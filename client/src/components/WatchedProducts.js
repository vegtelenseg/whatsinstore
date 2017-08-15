import React, { Component } from 'react';

class WatchedProducts extends Component {
  constructor() {
    super();
    this.state ={
      showWatchedProductsDetails: false
    }
  }
  showWatchedProducts = () => {
    this.setState({
      showWatchedProductsDetails:
      this.state.showWatchedProductsDetails ? false : true
    })
  }
  render() {
    return (
      <div id="watched-products-container" className="icons">
        <span id="watched-products" onClick={this.showWatchedProducts}></span>
        <div id={this.state.showWatchedProductsDetails ? "show" : "hide"}
          className="watched-products-details">
          <p>Detail one</p>
          <p>Detail two</p>
          <p>Detail three</p>
        </div>
      </div>
    );
  }
}

export default WatchedProducts;
