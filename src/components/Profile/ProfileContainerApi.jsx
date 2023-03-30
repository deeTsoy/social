import React from 'react'; 
import { useEffect } from 'react';
import axios from "axios";
import Profile from './Profile';


const ProfileContainerApi = (props) => {
  let userId = this.props.mathch.params.userId;
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
      .then(response => {
        props.setUserProfile(response.data);
      });
  }, []);

  return (
    <Profile profile={props.profile} />
  )
};

export default ProfileContainerApi;