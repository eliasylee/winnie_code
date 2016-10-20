import { PinConstants,
         receiveAllPins,
         receiveOnePin,
         receivePinsErrors,
         receivePinErrors } from '../actions/pin_actions';
import { fetchAllPins,
         fetchOnePin } from '../util/pin_api_util';

const PinsMiddleware = ({ dispatch }) => next => action => {
  const fetchAllSuccess = data => dispatch(receiveAllPins(data));
  const fetchOneSuccess = data => dispatch(receiveOnePin(data));
  const pinsErrors = data => dispatch(receivePinsErrors(data));
  const pinErrors = data => dispatch(receivePinErrors(data));
  switch (action.type) {
    case PinConstants.FETCH_ALL_PINS:
      fetchAllPins(action.location, fetchAllSuccess, pinsErrors);
      return next(action);
    case PinConstants.FETCH_ONE_PIN:
      fetchOnePin(action.venu, fetchOneSuccess, pinErrors);
      return next(action);
    default:
      return next(action);
  }
};

export default PinsMiddleware;
