import { PinConstants } from '../actions/pin_actions';
import merge from 'lodash/merge';

const defaultState = {
  pin: {}
};

const PinReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case PinConstants.RECEIVE_ONE_PIN:
      newState.pin = action.pin;
      return newState;
    default:
      return state;
  }
};

export default PinReducer;
