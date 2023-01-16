import React from 'react'; 
import Post from './post/post';
import s from './MyPosts.module.css';

const MyPosts = (props) => { 

  let postsData = [
    {id: 1, post: "holla!", like: 22},
    {id: 2, post: "How are you?!", like: 56},
    {id: 3, post: "Sugoi", like: 10},
    {id: 4, post: "HOla holaaaaa", like:12}
];

let posts = postsData.map(item =>  item = <Post massage = {item.post} likes = {item.like}/>)

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
