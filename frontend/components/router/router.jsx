import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import MapContainer from '../map/map_container';
import VenueContainer from '../venue/venue_container';
import { fetchOnePin } from '../../actions/pin_actions';

const AppRouter = ({ store }) => {
  const fetchVenueInfo = nextState => {
    store.dispatch(fetchOnePin(nextState.params.id));
  };

  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={MapContainer}/>
        <Route path="/venue/:id" component={VenueContainer} onEnter={fetchVenueInfo}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
