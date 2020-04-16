import { connect } from 'react-redux'
import Req from '../components/Req'

const mapStateToProps = (state) => {
    return {
      reqs: state.reqs
    }
}

export default connect(mapStateToProps)(Req)
