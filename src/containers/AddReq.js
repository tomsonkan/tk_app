import {connect} from 'react-redux';
import AddReq from '../components/AddReq';
import {addTic, fetchReqs, } from '../redux/actions';

const mapStateToProps = state => {
  return {
    reqs: state.reqs,
    Level: state.reqs.Level
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTic: (tic) => {dispatch(addTic(tic))},
    fetchReqs: () => dispatch(fetchReqs()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddReq)