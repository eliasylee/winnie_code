import { connect } from 'react-redux';
import { fetchAllPins,
         fetchOnePin } from '../../actions/pin_actions';
import { saveMapToStore } from '../../actions/map_actions';
import Map from './map';

const mapStateToProps = (state, ownProps) => ({
  pins: state.pins
});

const mapDispatchToProps = dispatch => ({
  fetchAllPins: loc => dispatch(fetchAllPins(loc)),
  fetchOnePin: venue => dispatch(fetchOnePin(venue)),
  saveMapToStore: map => dispatch(saveMapToStore(map))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
