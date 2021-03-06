import { PinConstants } from '../actions/pin_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PinReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case PinConstants.RECEIVE_ONE_PIN:
      return action.pin.response.venue;
    case PinConstants.RECEIVE_PIN_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default PinReducer;
