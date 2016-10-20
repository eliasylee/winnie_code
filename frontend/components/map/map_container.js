import { connect } from 'react-redux';
import { fetchAllPins,
         fetchOnePin } from '../../actions/pin_actions';
import { saveMapToStore,
         savePosToStore } from '../../actions/map_actions';
import Map from './map';

const mapStateToProps = (state, ownProps) => ({
  pins: state.pins,
  pos: state.pos
});

const mapDispatchToProps = dispatch => ({
  fetchAllPins: loc => dispatch(fetchAllPins(loc)),
  fetchOnePin: venue => dispatch(fetchOnePin(venue)),
  saveMapToStore: map => dispatch(saveMapToStore(map)),
  savePosToStore: pos => dispatch(savePosToStore(pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
