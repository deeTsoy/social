import React from 'react'; 
import { useEffect } from 'react';
import axios from "axios";
import Profile from './Profile';



const ProfileContainerApi = (props) => {

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)  
      .then(response => {
        props.setUserProfile(response.data);
      });
  }, [props.userId]);

  return (
    <Profile {...props} profile={props.profile} />
  )
};

export default ProfileContainerApi;