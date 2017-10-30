import React, {Component } from 'react';
import Search from './Search';
import '../generated-sources/map-styles.css';
import MapWithAMarkerClusterer from './MapWithCluster';

export class MapContainer extends Component {
constructor() {
  super();
  this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    bestBefore: '',
    checkoutRate: 0,
    inStock: 0,
    lat: 0,
    lng: 0,
    productBrand: '',
    store:'',
    markers: []
  }
  this.setMarkers = this.setMarkers.bind(this);
  this.updateMarkers = this.updateMarkers.bind(this);
  this.watchProduct = this.watchProduct.bind(this);
}

onMarkerClick = (props, marker, e) => {
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: this.state.showingInfoWindow === false ? true : false,
  });
  console.log(props);
}

onInfoWindowClose() {
  this.setState({
    showingInfoWindow: false,
    activeMarker: null
  })
}

onMapClick = (props) => {
  this.setState({
    showingInfoWindow:false,
    activeMarker: null
  })
}
setMarkers = (data2, query) => {
  console.log(data2[0]);
  this.setState({
      markers: data2
    })
  /*this.setState({
    ...data,
  });*/
}
updateMarkers = (data) => {
  this.setState({
    ...data
  })
}

watchProduct = (e) => {
  e.preventDefault();
  alert("Watching");
}
render() {
  return (
    <div>
      <MapWithAMarkerClusterer markers={this.state.markers} isOpen={true}/>
      <Search setMarkersData={this.setMarkers} updateMarkersData={this.updateMarkers}/>
    </div>
    );
  }
}

export default MapContainer
