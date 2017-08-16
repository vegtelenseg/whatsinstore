import React, { Component } from 'react';
import MapContainer from './Map';
import SideNav from './SideNav';
import '../generated-sources/watched-products.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MapContainer/>
        <SideNav watched={"Watching"}/>
      </div>

    );
  }
}

export default App;
