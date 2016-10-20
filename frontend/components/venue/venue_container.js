import { connect } from 'react-redux';
import Venue from './venue';

const mapStateToProps = (state, ownProps) => ({
  pin: state.pin
});

export default connect(
  mapStateToProps,
  null
)(Venue);
