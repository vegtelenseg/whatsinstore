import React, { Component } from 'react';
import '../generated-sources/watched-products.css';
import WatchedProducts from './WatchedProducts';

class  SideNav extends Component {

  render() {
    return(
      <div className="watched-products-container">
        <ul>
          <li id="watched">
              <WatchedProducts/>
          </li>
          <li>
            <div className="icons">
              <span id="stores"></span>
            </div>
          </li>
          <li>
            <div className="icons">
              <span></span>
            </div>
          </li>
          <li>
            <div className="icons">
              <span></span>
            </div>
          </li>
        </ul>

      </div>
    );
  }
}

export default SideNav;
