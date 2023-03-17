import {connect} from "react-redux";
import {setUserProfile}from '../Redux/profileReducer'
import ProfileContainerApi from './ProfileContainerApi';



let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
};
let ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerApi);

export default ProfileContainer