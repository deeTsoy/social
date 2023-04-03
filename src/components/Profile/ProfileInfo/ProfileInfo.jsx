import s from'./ProfileInfo.module.css';
import photo from "../../Users/userPhoto.png"
import Preloader from "../../loader/loader"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
   
    let aboutMe = props.profile.aboutMe
    let contacts = props.profile.contacts

    return(
    <div> 
        <div> 
            <img src={'https://huarache-shop.ru/800/600/https/pbphotos.twimg.com/media/ECCQSz2W4AUyBFz.jpg'}  width="1000"/> 
        </div> 
        <div className={s.descriptionBlock}> 
            <div>
                <img src={props.profile.photos.large} height='100'/>
            </div>
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