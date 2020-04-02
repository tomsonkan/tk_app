import {connect} from 'react-redux'
import Like from '../components/Like'
import {isLike} from '../redux/actions'

const mapStatetoProps = (state) => {
  return {
    reqs: state.reqs,
    isLiked1: state.isLiked1,
    isLiked2: state.isLiked2,
    isLiked3: state.isLiked3,
    
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    isLike: () => dispatch(isLike()),
  }
}

export default connect (mapStatetoProps, mapDispatchToProps)(Like)