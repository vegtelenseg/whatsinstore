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
      store:'',
      markersData:[],
      markerCollection: [],
      infoWindowCollection:[]
    }
    this.setMarkers = this.setMarkers.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
    this.watchProduct = this.watchProduct.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
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
    let markersObjects = [];
    //let infoWindows = null;
//    this.state.markersData.push(...data);
    this.setState({
      markersData: [...data],
    });
    data.map((markerData, key) => {
      console.log(key);
      console.log(markerData.store);
      markersObjects.push(
          <Marker key={Date.now + Math.random()}  onClick={this.onMarkerClick}
            name={markerData.store}
            position={{lat: markerData.lat, lng: markerData.lng}}
            label={JSON.stringify(markerData.inStock)}
          />
      );
      markersObjects.push(
      <InfoWindow key={Date.now + Math.random()}
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onInfoWindowClose}>
        <div className="info-window">
          <h2>{this.state.selectedPlace.name}</h2>
          <h4>{markerData.bestBefore}</h4>
          <h4>{markerData.checkoutRate}</h4>
          <h4>{markerData.inStock}</h4>
          <h4>{markerData.productBrand}</h4>
          <button type="button" onClick={this.watchProduct}>Watch</button>
          <WatchProduct />
        </div>
      </InfoWindow>);
      return true;
    });
    //this.state.markerCollection.push(markersObjects);
    this.setState({
      markerCollection: markersObjects,
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
    let styles = {
      streetViewControl: false,
      featureType: "all",
      elementType: "all",
      stylers: [
        {visibility: 'off'}
      ]
    }
    console.log(this.state.markerCollection);
    return (
      <Map google={this.props.google}
      zoom={16}
      initialCenter={{
        lat: -26.107567,
        lng: 28.056702
      }}
      enableEventPropagation={true}
      mapTypeControl={false}
      streetViewControl={false}

      disableDefaultUI={true}
      centerAroundCurrentLocation={false}
      onClick={this.onMapClick}
      >
      {this.state.markerCollection}
      <Search setMarkersData={this.setMarkers} updateMarkersData={this.updateMarkers}/>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4Bk4mgkwE5JASlw6hPZdsuCvA9BP10YM'
})(MapContainer)
