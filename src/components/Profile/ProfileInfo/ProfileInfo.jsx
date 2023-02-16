import s from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
    <div> 
        <div> 
            <img src='https://huarache-shop.ru/800/600/https/pbs.twimg.com/media/ECCQSz2W4AUyBFz.jpg'  width="1000"/> 
        </div> 
        <div className={s.descriptionBlock}> 
            <div>
                <img src="https://avatarfiles.alphacoders.com/707/70732.png" height='100'/>
            </div>
            <div>
                description...
            </div>
        </div> 
    </div> 
      ) 
}

export default ProfileInfo;