import { MapConstants } from '../actions/map_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PosReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case MapConstants.SAVE_POS_TO_STORE:
      return action.pos;
    default:
      return state;
  }
};

export default PosReducer;
