import React, {Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Search from './Search';
import WatchProduct from './WatchProduct';
import '../generated-sources/map-styles.css';

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
    store:''
  }
  this.setMarkers = this.setMarkers.bind(this);
  this.updateMarkers = this.updateMarkers.bind(this);
  this.watchProduct = this.watchProduct.bind(this);
}

onMarkerClick = (props, marker, e) => {
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: this.state.showingInfoWindow === true ? false : true
  });
}

onMapClick = (props, map, e) => {
  this.setState({
    showingInfoWindow:false
  })
}

setMarkers = (data, query) => {
  this.setState({
    ...data,
  });
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
  let styles = [{
    streetViewControl: false,
    featureType: "all",
    elementType: "all",
    stylers: [
      {'color': '#ee3dfe'}
    ]
  }];

  return (
    <Map google={this.props.google}
          zoom={16}
          style={styles}
          initialCenter={{
            lat: -26.107567,
            lng: 28.056702
          }}
          enableEventPropagation={true}
          mapTypeControl={false} // We don't need satellite views because we are not interested in viewing places but showing where they virtually are.
          streetViewControl={true}

          disableDefaultUI={true}
          centerAroundCurrentLocation={false}
          onClick={this.onMapClick}
      >
      <Marker onClick={this.onMarkerClick}
              name={this.state.store}
              position={{lat: this.state.lat, lng: this.state.lng}}
              defaultAnimation={2}
              label={JSON.stringify(this.state.inStock)} />
              <Marker onClick={this.onMarkerClick}
                      name={this.state.store}
                      position={{lat: this.state.lat, lng: this.state.lng}}
                      label={JSON.stringify(this.state.inStock)} />
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div className="info-window">
              <h2>{this.state.selectedPlace.name}</h2>
              <h4>{this.state.bestBefore}</h4>
              <h4>{this.state.checkoutRate}</h4>
              <h4>{this.state.inStock}</h4>
              <h4>{this.state.productBrand}</h4>
              <button type="button" onClick={this.watchProduct}>Watch</button>
              <WatchProduct />
            </div>
        </InfoWindow>
        <Search setMarkersData={this.setMarkers} updateMarkersData={this.updateMarkers}/>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4Bk4mgkwE5JASlw6hPZdsuCvA9BP10YM'
})(MapContainer)
