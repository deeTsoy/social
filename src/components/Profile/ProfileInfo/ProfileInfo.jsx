import React, {useState, useEffect}from 'react';
import s from'./ProfileInfo.module.css';
import photo from "../../Users/userPhoto.png"
import Preloader from "../../loader/loader"
import land from './prof.jpg'
import ProfileStatus from './ProfileStatus';
import AddPhotoInput from './addPhotoInput'
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm"

const ProfileInfo = ({profile,isOwner,addPhoto, status, updateUserStatus , updateProfileInfo}) => {

    const [editer,setEditer] = useState(false);

    const activateEditor = () =>{
        setEditer(true);
    }

    if (!profile) {
        return <Preloader />
    }

    return(
    <div> 
        <div> 
            <img src={land}  width="1000"/> 
        </div> 
        <div className={s.descriptionBlock}> 
            <div>
                <img src={profile.photos.large || photo} height='100'/>
                {isOwner && <AddPhotoInput addPhoto={addPhoto} /> }
            </div>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            {editer ? <ProfileDataForm profile = {profile} updateProfileInfo={updateProfileInfo}/>
             :  <ProfileData 
             profile = {profile} 
             isOwner={isOwner}
             activateEditor={activateEditor}/> }
        </div> 
    </div> 
      ) 
}

const ProfileData = ({profile, isOwner, activateEditor}) => { 
    return( <div> 
        {isOwner ? <button onClick={activateEditor}>Edit</button> : null }
        <div>
        </div>
        <div> 
            <b>Full name</b>: {profile.fullName} 
        </div> 
        {!profile.lookingForAJob ? (        <div> 
            <b>Looking for a job</b>: {profile.lookingForAJob} 
        </div> ) : ( <div> 
            <b>Job Description</b>: {profile.lookingForAJobDescription} 
        </div> )}
        <div> 
            <b>About me</b>: {profile.aboutMe} 
        </div> 
        <div>
            <h4>Contacts:</h4>
            {Object.entries(profile.contacts).map(([key, value]) => (
            <Contact key={key} contactTitle={key} contactValue={value} />
      ))}
        </div>
    </div> )
} 

const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div>
        <b>{contactTitle}:</b>
        <a href={contactValue}>{contactValue}</a>
      </div>
    );
  };

export default ProfileInfo;