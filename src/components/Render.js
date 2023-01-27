import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { addPost, updateNewPostText, addNewMessageText, addMessage } from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let reRender =(state) =>{
  root.render(
    <React.StrictMode>
      <App 
        state={state} 
        addPost = {addPost} 
        updateNewPostText={updateNewPostText} 
        addNewMessageText={addNewMessageText}
        addMessage={addMessage}/>
    </React.StrictMode>
  );
};

