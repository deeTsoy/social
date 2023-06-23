import s from'./ProfileInfo.module.css';
import photo from "../../Users/userPhoto.png"
import Preloader from "../../loader/loader"
import land from './prof.jpg'
import ProfileStatus from './ProfileStatus';
import AddPhotoInput from './addPhotoInput'

const ProfileInfo = ({profile,isOwner,addPhoto, status, updateUserStatus }) => {

    if (!profile) {
        return <Preloader />
    }
   
    let aboutMe = profile.aboutMe
    let contacts = profile.contacts

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
            <div>
               {aboutMe}
            </div>
            <div>
               <div>
                    {contacts.facebook}
               </div>
               <div>
                    {contacts.github}
                </div>
                <div>
                    {contacts.instagram}
                </div>
                <div>
                    {contacts.twitter}
                </div>
                <div>
                    {contacts.website}
                </div>
            </div>
        </div> 
    </div> 
      ) 
}

export default ProfileInfo;