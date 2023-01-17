import React from 'react'; 
import Post from './post/post';
import s from './MyPosts.module.css';

const MyPosts = (props) => { 

let posts = props.postsData.map(item =>  item = <Post massage = {item.post} likes = {item.like}/>)

    return (
      <div className={s.postsBlock}> 
        <h3> My posts </h3>
        <div> 
          <div>
            <textarea> </textarea>
          </div>
          <div>
            <button> Add post</button>
          </div>
        </div> 
        <div className={s.posts}> 
          {posts}
        </div> 
    </div> 
    );
};
 
export default MyPosts;
