// fill out this container
import {connect} from 'react-redux'
import Import from '../components/Import'
import {fetchMakes} from '../redux/actions'

/**
 * 
 * DOING THIS IN OFER TO LINK IT UPO TOO THE COMPPONET TO GET ACCESS TO THE STATE!!! 
 */


const mapStateToProps = (state) => {
  return{
    makes: state.makes,

  }
}

 const mapDispatchStateToProps = (dispatch) => {
  return {
    fetchMakes: () => {dispatch(fetchMakes())}
  }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(Import)

