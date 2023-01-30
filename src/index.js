import React from 'react';
import state from './components/Redux/State'
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { addPost, updateNewPostText, addNewMessageText, addMessage, sub } from './components/Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

 let reRender =() =>{
  root.render(
    <React.StrictMode>
      <App 
        state={state} 
        addPost = {addPost} 
        updateNewPostText={updateNewPostText} 
        addNewMessageText={addNewMessageText}
        addMessage={addMessage}
      />
    </React.StrictMode>
  );
};

reRender(state);

sub(reRender);