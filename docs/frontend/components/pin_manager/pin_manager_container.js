import { connect } from 'react-redux';
import PinManager from './pin_manager';

const mapStateToProps = (state, ownProps) => ({
  pins: state.pins,
  map: state.map
});

export default connect(
  mapStateToProps,
  null
)(PinManager);
