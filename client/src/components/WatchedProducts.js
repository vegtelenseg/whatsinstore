import React, { Component } from 'react';
import Popup from 'react-popup';

class WatchedProducts extends Component {
  constructor() {
    super();
    this.state ={
      showWatchedProductsDetails: false
    }
  }
  showWatchedProducts = () => {
    Popup.create({
    title: 'The title',
    content: 'Hello, look at me',
    className: 'alert',
    buttons: {
        right: ['ok']
    }
    });
  }
  render() {
    return (
      <div className="icons" >
        <span id="watched-products" onClick={this.showWatchedProducts}></span>
        <Popup
            className="mm-popup"
            btnClass="mm-popup__btn"
            closeBtn={true}
            closeHtml={null}
            defaultOk="Ok"
            defaultCancel="Cancel"
            wildClasses={false}
            closeOnOutsideClick={true} />
      </div>
    );
  }
}

export default WatchedProducts;
