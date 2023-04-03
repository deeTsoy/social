import { connect } from 'react-redux';
import { setUserProfile } from '../Redux/profileReducer';
import ProfileContainerApi from '../Profile/ProfileContainerApi';
import { useParams } from 'react-router-dom';

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const ProfileContainer = ({ setUserProfile, ...Props }) => {

  const {userId} = useParams();
  return (
    <ProfileContainerApi
      userId={userId}
      {...Props}
      setUserProfile={setUserProfile}
    />
  );
};

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);