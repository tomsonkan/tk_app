import {connect} from 'react-redux';
import RemoveReq from '../components/RemoveReq';
import {removeTic, fetchReqs, } from '../redux/actions';

const mapStateToProps = state => {
  return {
    reqs: state.reqs,
    Level: state.reqs.Level
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTic: index => dispatch(removeTic(index)),
    fetchReqs: () => dispatch(fetchReqs()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RemoveReq)