/* global google */

import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Map extends React.Component {
  componentDidMount() {
    this.locationSuccess();
  }

  locationSuccess(position) {
    const mapDOMNode = document.getElementById("map");
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    new google.maps.Map(mapDOMNode, mapOptions);
  }

  locationError() {
    let output = document.getElementById("map");
    output.innerHTML = "Unable to retrieve your location";
  }

  geoFindMe() {
    let output = document.getElementById("map");

    if (!navigator.geolocation){
      output.innerHTML = "Geolocation is not supported by your browser";
      return;
    } else {
      navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError);
    }
  }

  render() {
    return(
      <div id="map"></div>
    );
  }
}

export default withRouter(Map);
