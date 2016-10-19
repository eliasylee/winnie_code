import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class Map extends React.Component {
  

  render() {
    return(
      <div id="map-container" ref='map'></div>
    );
  }
}

export default withRouter(Map);
