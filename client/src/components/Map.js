import React, {Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
constructor() {
  super();
  this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }
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
              title={"The marker's title will appear as a tooltip."}
              name={'Sandton City'}
              position={{lat: -26.107567, lng: 28.056702}} />

              <Marker onClick={this.onMarkerClick}
                      title={"The marker's title will appear as a tooltip."}
                      name={'Current location'}
                      position={{lat: -24.10756635, lng: 23.056700699999965}} />
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4Bk4mgkwE5JASlw6hPZdsuCvA9BP10YM'
})(MapContainer)
