import { combineReducers } from 'redux';
import PinsReducer from './pins_reducer';
import PinReducer from './pin_reducer';
import MapReducer from './map_reducer';

const RootReducer = combineReducers({
  pins: PinsReducer,
  pin: PinReducer,
  map: MapReducer
});

export default RootReducer;
