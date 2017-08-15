import React, { Component } from 'react';

class Sale extends Component {
  constructor() {
    super();
    this.state ={
      showSaleDetails: false
    }
  }
  showSale = () => {
    this.setState({
      showSale:
      this.state.showSale ? false : true
    })
  }
  render() {
    return (
      <div className="icons">
        <span id="sales" onClick={this.showSale}></span>
        <div className={
            this.state.showSale ?
            "show alternative-stores-details" : "hide"
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

export default Sale;
