import React, {Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { bubble as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    'z-index': 1,
    position: 'fixed',
    width: '36px',
    height: '19px',
    left: '90%',
    top: '43%',
    transform: 'rotate(270deg)'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

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
          zoom={14}
          style={style}
          initialCenter={{
            lat: -26.10756635,
            lng: 28.056700699999965
          }}
          onClick={this.onMapClick}
      >
      <Marker onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'Sandton City'}
              position={{lat: -26.10756635, lng: 28.056700699999965}} />
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

        <Menu isOpen={false} right styles={styles}>
       <a id="home" className="menu-item" href="/">Home</a>
       <a id="about" className="menu-item" href="/about">About</a>
       <a id="contact" className="menu-item" href="/contact">Contact</a>
       <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
     </Menu>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4Bk4mgkwE5JASlw6hPZdsuCvA9BP10YM'
})(MapContainer)
