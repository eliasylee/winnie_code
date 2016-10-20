/* global google */
import React from 'react';
import { withRouter } from 'react-router';

class PinManager extends React.Component {
  componentWillReceiveProps(props) {
    if (props.pins[0]) {
      props.pins.forEach(pin => {
        this.createMarker(pin, props.map);
      });
    }
  }

  createMarker(pin, map) {
    let markerPos = {
      lat: pin.venue.location.lat,
      lng: pin.venue.location.lng
    };

    let newMarker = new google.maps.Marker({
      position: markerPos,
      map: map
    });

    let venueId = pin.venue.id;

    newMarker.addListener('click', () => {
      this.props.router.push(`/venue/${venueId}`);
    });
  }

  render() {
    return null;
  }
}

export default withRouter(PinManager);
