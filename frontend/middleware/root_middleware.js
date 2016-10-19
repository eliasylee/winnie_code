import { applyMiddleware } from 'redux';
import PinsMiddleware from './pins_middleware';

const RootMiddleware = applyMiddleware(
  PinsMiddleware 
);

export default RootMiddleware;
