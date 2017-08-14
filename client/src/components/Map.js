import React, {Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Search from './Search';
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
  this.setMarkers = this.setMarkers.bind(this)
  this.updateMarkers = this.updateMarkers.bind(this)
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
setMarkers = (data2, query) => {
  let data = data2[query];
  this.setState({
    ...data,
    lat: data.latitude,
    lng: data.longitude,
  });
}
updateMarkers = (data) => {
  this.setState({
    ...data
  })
}
render() {
  const style = {
    width: '100%',
    height: '100%'
  }

  return (
    <Map google={this.props.google}
          zoom={16}
          style={style}
          initialCenter={{
            lat: -26.107567,
            lng: 28.056702
          }}
          disableDefaultUI={true}
          centerAroundCurrentLocation={false}
          onClick={this.onMapClick}
      >
      <Marker onClick={this.onMarkerClick}
              name={this.state.store}
              position={{lat: this.state.lat, lng: this.state.lng}}
              label={JSON.stringify(this.state.inStock)} />
      <InfoWindow
          className={"info-window"}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div className="info-window">
              <h2>{this.state.selectedPlace.name}</h2>
              <h4>{this.state.bestBefore}</h4>
              <h4>{this.state.checkoutRate}</h4>
              <h4>{this.state.inStock}</h4>
              <h4>{this.state.productBrand}</h4>
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
