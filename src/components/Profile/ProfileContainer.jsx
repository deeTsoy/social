import {connect} from "react-redux";
import {setUserProfile}from '../Redux/profileReducer'
import ProfileContainerApi from './ProfileContainerApi';
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
};
let WithRouter = withRouter(ProfileContainerApi);
let ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithRouter);

export default ProfileContainer