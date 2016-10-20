import { combineReducers } from 'redux';
import PinsReducer from './pins_reducer';
import PinReducer from './pin_reducer';
import MapReducer from './map_reducer';
import PosReducer from './pos_reducer';

const RootReducer = combineReducers({
  pins: PinsReducer,
  pin: PinReducer,
  map: MapReducer,
  pos: PosReducer
});

export default RootReducer;
