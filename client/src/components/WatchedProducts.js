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
      <div className="icons">
        <span id="watched-products" onClick={this.showWatchedProducts}></span>
        <div className={
          this.state.showWatchedProductsDetails ?
          "show watched-products-details" : "hide"}
        >
          <p>Detail one</p>
          <p>Detail two</p>
          <p>Detail three</p>
        </div>
      </div>
    );
  }
}

export default WatchedProducts;
