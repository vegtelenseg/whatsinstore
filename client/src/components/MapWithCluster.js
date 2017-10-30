import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import React from 'react';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const onMarkerClick = (props) => props.isOpen = props.isOpen === false ? true : false
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
     selectedPlace: {},
     showingInfoWindow: false
   }), {
     onToggleOpen: ({ isOpen }) => () => ({
       isOpen: !isOpen,
     }),
		 onMarkerClick: (state, markers, e) => (marker) => {
			 console.log("Some marker information ", markers.markers, marker);
			 state.isOpen = !state.isOpen;
			 state.selectedPlace = marker;
		 }
   }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat:-26.105407, lng: 28.054264 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={90}
    >
    <div>{
      props.markers.map(marker => (
          <Marker key={Math.random()}
            position={{ lat: marker[0].lat, lng: marker[0].lng }}
            label={JSON.stringify(marker[0].inStock)}
            onClick={(e) => props.onMarkerClick(e)}
          >
            {  props.isOpen &&
                <InfoWindow onCloseClick={props.onToggleOpen}
                  defaultPosition={{lat: marker[0].lat, lng: marker[0].lng}}
                >
                <div>
                  <h4>{marker[0].bestBefore}</h4>
                  <p>{marker[0].checkoutRate}</p>
                  <p>{marker[0].inStock}</p>
                  </div>
                </InfoWindow>
            }
          </Marker>
        )
      )
    }</div>
    </MarkerClusterer>
  </GoogleMap>
);

export default MapWithAMarkerClusterer;
