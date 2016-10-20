import { MapConstants } from '../actions/map_actions';
import merge from 'lodash/merge';

const defaultState = {};

const MapReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case MapConstants.SAVE_MAP_TO_STORE:
      return action.map;
    default:
      return state;
  }
};

export default MapReducer;
