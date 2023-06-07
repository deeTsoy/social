import s from'./ProfileInfo.module.css';
import photo from "../../Users/userPhoto.png"
import Preloader from "../../loader/loader"
import land from './prof.jpg'
import ProfileStatus from './ProfileStatus';
import AddPhotoInput from './addPhotoInput'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
   
    let aboutMe = props.profile.aboutMe
    let contacts = props.profile.contacts

    return(
    <div> 
        <div> 
            <img src={land}  width="1000"/> 
        </div> 
        <div className={s.descriptionBlock}> 
            <div>
                {!props.profile.photos.large ? <img src={photo} height='100'/> : <img src={props.profile.photos.large} height='100'/>}
                <AddPhotoInput addPhoto={props.addPhoto} />
            </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
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