/* global google */
import React from 'react';
import ReactDOM from 'react-dom';
import PinManagerContainer from '../pin_manager/pin_manager_container';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.locationSuccess = this.locationSuccess.bind(this);
  }

  componentDidMount() {
    this.geoFindMe();
  }

  locationSuccess(position) {
    const mapDOMNode = document.getElementById("map");
    const mapOptions = {
      center: {lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 13
    };
    this.props.fetchAllPins(mapOptions.center);
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.props.saveMapToStore(this.map);
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
      <div>
        <div id="map"></div>
        <PinManagerContainer />
      </div>
    );
  }
}

export default Map;
