import {connect} from 'react'
import Navigation from '../components/Navigation'
import {login, logout} from '../redux/action'

const mapStatetoProps = (state) => {
  return {
    user:state.user
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  }
}

export default connect (mapStatetoProps, mapDispatchToProps) (Navigation)