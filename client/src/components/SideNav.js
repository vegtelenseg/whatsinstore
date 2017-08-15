import React, { Component } from 'react';
import '../generated-sources/watched-products.css';
import WatchedProducts from './WatchedProducts';
import AlternativeStores from './AlternativeStores';
import Sale from './Sale';
class  SideNav extends Component {

  render() {
    return(
      <div className="watched-products-container">
        <ul>
          <li id="watched">
              <WatchedProducts/>
          </li>
          <li id="alternative">
              <AlternativeStores/>
          </li>
          <li>
              <Sale/>
          </li>
          <li>
            <div className="icons">
              <span id="improve-app"></span>
            </div>
          </li>
        </ul>

      </div>
    );
  }
}

export default SideNav;
