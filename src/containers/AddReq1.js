import {connect} from 'react-redux';
import AddReq1 from '../components/AddReq1';
import {addTic1, fetchReqs1} from '../redux/actions';

const mapStateToProps = state => {
  return {
    reqs1: state.reqs1,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTic1: (tic1) => {dispatch(addTic1(tic1))},
    fetchReqs1: () => dispatch(fetchReqs1())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddReq1)