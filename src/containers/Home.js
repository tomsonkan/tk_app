import {connect} from 'react-redux'
import Home from '../components/Home'
import {removeTic, fetchReqs} from '../redux/actions'

const mapStateToProps = state => {
  return {
    user: state.user,
    reqs: state.reqs,
    
  }
}

const mapDispatchToProps = dispatch => {
  return{
    removeTic: index => dispatch(removeTic(index)),
    fetchReqs: () => dispatch(fetchReqs()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)