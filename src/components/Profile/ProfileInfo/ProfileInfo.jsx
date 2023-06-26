import React, {useState}from 'react';
import s from'./ProfileInfo.module.css';
import photo from "../../Users/userPhoto.png"
import Preloader from "../../loader/loader"
import land from './prof.jpg'
import ProfileStatus from './ProfileStatus';
import AddPhotoInput from './addPhotoInput'
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm"

const ProfileInfo = ({profile,isOwner,addPhoto, status, updateUserStatus }) => {

    const [editer,setEditer] = useState(false);
    console.log(editer)
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
            {isOwner ? <button onClick={activateEditor}>Edit</button> : null }
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            {editer ? <ProfileDataForm profile = {profile}/>
             :  <ProfileData 
             profile = {profile} 
             isOwner={isOwner}
             activateEditor={activateEditor}/> }
        </div> 
    </div> 
      ) 
}

const ProfileData = ({profile, isOwner, activateEditor}) => { 
    return <div> 
        <div>
        </div>
        <div> 
            <b>Full name</b>: {profile.fullName} 
        </div> 
        <div> 
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"} 
        </div> 
        {profile.lookingForAJob && 
        <div> 
            <b>My professional skills</b>: {profile.lookingForAJobDescription} 
        </div> 
        } 
        <div> 
            <b>About me</b>: {profile.aboutMe} 
        </div> 
        <div> 
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => { 
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/> 
        })} 
        </div> 
    </div> 
} 

const Contact = ({contactTitle, contactVolue}) => {
    return (<div className={s.contact}>
        <b>{contactTitle}</b>:{contactVolue}
    </div>)
}

export default ProfileInfo;