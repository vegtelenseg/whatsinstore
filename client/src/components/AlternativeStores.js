import React, { Component } from 'react';

class AlternativeStores extends Component {
  constructor() {
    super();
    this.state ={
      showWatchedProductsDetails: false
    }
  }
  showAlternativeStores = () => {
    this.setState({
      showAlternativeStores:
      this.state.showAlternativeStores ? false : true
    })
  }
  render() {
    return (
      <div className="icons">
        <span id="alternative-stores" onClick={this.showAlternativeStores}></span>
        <div className={
            this.state.showAlternativeStores ?
            "show" : "hide alternative-stores-details"
          }
        >
          <p>Detail one</p>
          <p>Detail two</p>
          <p>Detail three</p>
        </div>
      </div>
    );
  }
}

export default AlternativeStores;
