import { combineReducers } from 'redux';
import PinsReducer from './pins_reducer';
import PinReducer from './pin_reducer';

const RootReducer = combineReducers({
  PinsReducer,
  PinReducer
});

export default RootReducer;
