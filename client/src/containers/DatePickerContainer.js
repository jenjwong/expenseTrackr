import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators/';
import DatePicker from '../components/DatePicker';

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(DatePicker);
