import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import MapContainer from '../map/map_container';

const AppRouter = ({ store }) => {

  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={MapContainer}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
