import { combineReducers } from 'redux';
import PinsReducer from './pins_reducer';
import PinReducer from './pin_reducer';

const RootReducer = combineReducers({
  pins: PinsReducer,
  pin: PinReducer
});

export default RootReducer;
