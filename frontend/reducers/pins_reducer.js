import { PinConstants } from '../actions/pin_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PinsReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case PinConstants.RECEIVE_ALL_PINS:
      newState = merge(action.pins.response.groups[0].items);
      return newState;
    case PinConstants.RECEIVE_PINS_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default PinsReducer;
