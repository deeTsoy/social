import {connect} from "react-redux";
import {setUserProfile}from '../Redux/profileReducer'
import ProfileContainerApi from './ProfileContainerApi';

    
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
};
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerApi);