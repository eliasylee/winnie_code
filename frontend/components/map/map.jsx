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
    if (this.props.pos.coords) {
      this.regrabPosAndPins();
    } else {
      this.geoFindMe();
    }
  }

  regrabPosAndPins() {
    let mapDOMNode = document.getElementById("map");
    let mapOptions = {
      center: {lat: this.props.pos.coords.latitude, lng: this.props.pos.coords.longitude},
      zoom: 14
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.props.saveMapToStore(this.map);
  }

  locationSuccess(position) {
    let mapDOMNode = document.getElementById("map");
    let mapOptions = {
      center: {lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 14
    };
    this.props.savePosToStore(position);
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
