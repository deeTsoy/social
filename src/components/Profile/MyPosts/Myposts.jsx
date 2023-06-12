import React, { useMemo } from 'react'; 
import Post from './post/post';
import s from './MyPosts.module.css';
import NewPostInput from './NewPostInput'

const MyPosts = ({addPost, profilePage}) => { 
  
  let posts = useMemo(() => {
     return  profilePage.postsData.map(item =>  item = <Post massage = {item.post} key={item.id}  likes = {item.like}/>)
  }, [profilePage.postsData] )

let addNewPost = (value) => {
  addPost(value.newPostData)
}
console.log('ref')
return (
      <div className={s.postsBlock}> 
        <h3> My posts </h3>
        <div> 
          <NewPostInput addNewPost={addNewPost}/>
        </div> 
        <div className={s.posts}> 
          {posts}
        </div> 
    </div> 
    );
};

 
export default MyPosts;
