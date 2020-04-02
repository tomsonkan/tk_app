import {connect} from 'react'
import Navigation from '../components/Navigation'

const mapStatetoProps = (state) => {
  return {
    user:state.user
  }
}


const mapDispatchToProps = (dispatch) => {
  
}

export default connect (mapStatetoProps, mapDispatchToProps) (Navigation)