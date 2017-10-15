import { compose, withProps, withState, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import React from 'react';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const onMarkerClick = (e) => {
  alert("Yo");
  console.log(e);

}
const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: -26.105407, lng: 28.054264  }
  }),
  withStateHandlers(() => ({
     isOpen: false,
   }), {
     onToggleOpen: ({ isOpen }) => () => ({
       isOpen: !isOpen,
     })
   }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat:-26.105407, lng: 28.054264 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={90}
    >
    {
      props.markers.map(marker => (
        <div key={Math.random()}>
          <Marker
            position={{ lat: marker[0].lat, lng: marker[0].lng }}
            label={JSON.stringify(marker[0].inStock)}
            onClick={props.onToggleOpen}
          >
            {  props.isOpen &&
                <InfoWindow
                  defaultPosition={{lat: marker[0].lat, lng: marker[0].lng}}
                >
                  <h4>{marker[0].bestBefore}</h4>
                  <p>{marker[0].checkoutRate}</p>
                  <p>{marker[0].inStock}</p>
                </InfoWindow>
            }
          </Marker>
        </div>
      ))
    }
    </MarkerClusterer>
  </GoogleMap>
);

export default MapWithAMarkerClusterer;
