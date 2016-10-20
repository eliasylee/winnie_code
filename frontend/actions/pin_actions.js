export const PinConstants = {
  FETCH_ALL_PINS: "FETCH_ALL_PINS",
  FETCH_ONE_PIN: "FETCH_ONE_PIN",
  RECEIVE_ALL_PINS: "RECEIVE_ALL_PINS",
  RECEIVE_ONE_PIN: "RECEIVE_ONE_PIN",
  RECEIVE_PINS_ERRORS: "RECEIVE_PINS_ERRORS",
  RECEIVE_PIN_ERRORS: "RECEIVE_PIN_ERRORS"
};

export const fetchAllPins = location => ({
  type: PinConstants.FETCH_ALL_PINS,
  location
});

export const fetchOnePin = venue => ({
  type: PinConstants.FETCH_ONE_PIN,
  venue
});

export const receiveAllPins = pins => ({
  type: PinConstants.RECEIVE_ALL_PINS,
  pins
});

export const receiveOnePin = pin => ({
  type: PinConstants.RECEIVE_ONE_PIN,
  pin
});

export const receivePinsErrors = errors => ({
  type: PinConstants.RECEIVE_PINS_ERRORS,
  errors
});

export const receivePinErrors = errors => ({
  type: PinConstants.RECEIVE_PIN_ERRORS,
  errors
});
