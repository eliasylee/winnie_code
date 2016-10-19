/* global google */

import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Map extends React.Component {
  componentDidMount() {
    this.geoFindMe();
  }

  locationSuccess(position) {
    let output = document.getElementById("map");
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;

    let img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
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
      <div id="map" ref='map'></div>
    );
  }
}

export default withRouter(Map);
