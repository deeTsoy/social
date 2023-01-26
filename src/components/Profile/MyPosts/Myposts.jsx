import React from 'react'; 
import Post from './post/post';
import s from './MyPosts.module.css';
import { useRef, useEffect } from 'react';

const MyPosts = (props) => { 


let posts = props.postsData.map(item =>  item = <Post massage = {item.post} likes = {item.like}/>)

//создаем ссылку на элемент
let newPostElement = useRef();

const addPost = () => {
  // достаем содержимое из референса
  let text = newPostElement.current.value;
  props.addPost(text);
};

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
};

return (
      <div className={s.postsBlock}> 
        <h3> My posts </h3>
        <div> 
          <div>
            {/* привязываем референс к инпуту */}
            <textarea ref={newPostElement} onChange={onPostChange} value ={props.newPostData}/> 
          </div>
          <div>
            <button onClick={addPost}> Add post</button>
          </div>
        </div> 
        <div className={s.posts}> 
          {posts}
        </div> 
    </div> 
    );
};

 
export default MyPosts;
