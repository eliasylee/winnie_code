import { PinConstants } from '../actions/pin_actions';
import merge from 'lodash/merge';

const defaultState = {
  pins: {}
};

const PinsReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case PinConstants.RECEIVE_ALL_PINS:
      newState = newState.merge(action.pins);
      return newState;
    default:
      return state;
  }
};

export default PinsReducer;
